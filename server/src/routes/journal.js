import { Router } from 'express';
import JournalEntry from '../models/JournalEntry.js';
import { anonIdentity } from '../middleware/anonIdentity.js';

export const journalRouter = Router();

// Apply anonymous identity
journalRouter.use(anonIdentity);

// List my journal entries
journalRouter.get('/', async (req, res, next) => {
  try {
    const items = await JournalEntry.find({ createdBy: req.userId, deletedAt: null }).sort({ createdAt: -1 }).lean();
    res.json(items);
  } catch (e) { next(e); }
});

// Create a new entry
journalRouter.post('/', async (req, res, next) => {
  try {
    const { title, content, mood, visibility } = req.body || {};
    if (!content) return res.status(400).json({ error: 'content is required' });
    const item = await JournalEntry.create({ title, content, mood, visibility, createdBy: req.userId });
    res.status(201).json(item);
  } catch (e) { next(e); }
});

// Soft delete an entry
journalRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await JournalEntry.findOneAndUpdate(
      { _id: id, createdBy: req.userId, deletedAt: null },
      { $set: { deletedAt: new Date() } },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

// Get one entry
journalRouter.get('/:id', async (req, res, next) => {
  try {
    const item = await JournalEntry.findOne({ _id: req.params.id, createdBy: req.userId, deletedAt: null }).lean();
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  } catch (e) { next(e); }
});
