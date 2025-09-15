import { Router } from 'express';
import JournalEntry from '../models/JournalEntry.js';
import AudioNote from '../models/AudioNote.js';
import Thread from '../models/Thread.js';
import { anonIdentity } from '../middleware/anonIdentity.js';

export const safetyRouter = Router();

safetyRouter.use(anonIdentity);

// Panic: Minimal response that instructs client to clear local session
safetyRouter.post('/panic', async (req, res) => {
  res.setHeader('x-clear-session', 'true');
  res.json({ ok: true, message: 'Session cleared on client. You are safe.' });
});

// Wipe my data: soft-delete user content
safetyRouter.post('/wipe', async (req, res, next) => {
  try {
    const userId = req.userId;
    const now = new Date();
    const [j, a, t] = await Promise.all([
      JournalEntry.updateMany({ createdBy: userId, deletedAt: null }, { $set: { deletedAt: now } }),
      AudioNote.updateMany({ createdBy: userId, deletedAt: null }, { $set: { deletedAt: now } }),
      Thread.updateMany({ createdBy: userId, archivedAt: null }, { $set: { archivedAt: now } }),
    ]);
    res.json({ ok: true, journalUpdated: j.modifiedCount, audioUpdated: a.modifiedCount, threadsArchived: t.modifiedCount });
  } catch (e) { next(e); }
});

// Heartbeat (for client to ping)
safetyRouter.get('/heartbeat', (req, res) => {
  res.json({ status: 'ok', userId: req.userId, timestamp: new Date().toISOString() });
});
