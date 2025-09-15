import { Router } from 'express';
import { healthController } from '../controllers/health.controller.js';
import { journalRouter } from './journal.js';
import { audioRouter } from './audio.js';
import { affirmationsRouter } from './affirmations.js';
import { threadsRouter } from './threads.js';
import { safetyRouter } from './safety.js';

export const router = Router();

router.get('/health', healthController);

router.use('/journal', journalRouter);
router.use('/audio', audioRouter);
router.use('/affirmations', affirmationsRouter);
router.use('/threads', threadsRouter);
router.use('/safety', safetyRouter);
