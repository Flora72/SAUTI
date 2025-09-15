import { Router } from 'express';
import Thread from '../models/Thread.js';
import { anonIdentity } from '../middleware/anonIdentity.js';

const FEATURE_THREADS = process.env.FEATURE_THREADS !== 'false';

export const threadsRouter = Router();

threadsRouter.use((req, res, next) => {
  if (!FEATURE_THREADS) return res.status(404).json({ error: 'Threads feature disabled' });
  next();
});

threadsRouter.use(anonIdentity);

// List threads (public or trusted doesn't matter for MVP)
threadsRouter.get('/', async (req, res, next) => {
  try {
    const items = await Thread.find({ archivedAt: null }).sort({ createdAt: -1 }).lean();
    res.json(items);
  } catch (e) { next(e); }
});

// Create a thread
threadsRouter.post('/', async (req, res, next) => {
  try {
    const { title, visibility } = req.body || {};
    if (!title) return res.status(400).json({ error: 'title is required' });
    const item = await Thread.create({ title, visibility, createdBy: req.userId, posts: [] });
    res.status(201).json(item);
  } catch (e) { next(e); }
});

// Add a post to a thread
threadsRouter.post('/:id/posts', async (req, res, next) => {
  try {
    const { body } = req.body || {};
    if (!body) return res.status(400).json({ error: 'body is required' });
    const thread = await Thread.findOne({ _id: req.params.id, archivedAt: null });
    if (!thread) return res.status(404).json({ error: 'Thread not found' });
    thread.posts.push({ body, createdBy: req.userId });
    await thread.save();
    res.status(201).json(thread);
  } catch (e) { next(e); }
});

// Archive thread
threadsRouter.post('/:id/archive', async (req, res, next) => {
  try {
    const updated = await Thread.findOneAndUpdate({ _id: req.params.id }, { $set: { archivedAt: new Date() } }, { new: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json({ ok: true });
  } catch (e) { next(e); }
});
