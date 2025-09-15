import { Router } from 'express';
import AudioNote from '../models/AudioNote.js';
import { anonIdentity } from '../middleware/anonIdentity.js';

export const audioRouter = Router();

audioRouter.use(anonIdentity);

// List my audio notes
audioRouter.get('/', async (req, res, next) => {
  try {
    const items = await AudioNote.find({ createdBy: req.userId, deletedAt: null }).sort({ createdAt: -1 }).lean();
    res.json(items);
  } catch (e) { next(e); }
});

// Create an audio note (metadata only). In real app, upload to storage first
audioRouter.post('/', async (req, res, next) => {
  try {
    const { title, url, durationSec, visibility } = req.body || {};
    if (!url) return res.status(400).json({ error: 'url is required (storage placeholder)' });
    const item = await AudioNote.create({ title, url, durationSec, visibility, createdBy: req.userId });
    res.status(201).json(item);
  } catch (e) { next(e); }
});

// Delete (soft)
audioRouter.delete('/:id', async (req, res, next) => {
  try {
    const updated = await AudioNote.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.userId, deletedAt: null },
      { $set: { deletedAt: new Date() } },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json({ ok: true });
  } catch (e) { next(e); }
});
