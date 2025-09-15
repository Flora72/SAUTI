import { Router } from 'express';
import Affirmation from '../models/Affirmation.js';

export const affirmationsRouter = Router();

// List affirmations, optionally by theme
affirmationsRouter.get('/', async (req, res, next) => {
  try {
    const { theme } = req.query;
    const query = { visibility: 'public' };
    if (theme) query.theme = theme;
    const items = await Affirmation.find(query).sort({ createdAt: -1 }).lean();
    res.json(items);
  } catch (e) { next(e); }
});

// Seed some defaults (dev-only)
affirmationsRouter.post('/seed', async (req, res, next) => {
  try {
    if (process.env.NODE_ENV === 'production') return res.status(403).json({ error: 'Forbidden' });
    const seeds = [
      { text: 'Your breath is a steady river. It carries you.', theme: 'grounding' },
      { text: 'You are the author of your pace.', theme: 'safety' },
      { text: 'Softness is strength in another form.', theme: 'softness' },
      { text: 'Every small step is reclamation.', theme: 'reclamation' },
      { text: 'You do not have to be fearless to be brave.', theme: 'strength' },
    ];
    const created = await Affirmation.insertMany(seeds);
    res.status(201).json({ count: created.length });
  } catch (e) { next(e); }
});
