import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { router as apiRouter } from './routes/index.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

dotenv.config();

const app = express();

// Core middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Health route at root for quick checks
app.get('/index', (req, res) => {
  res.json({ status: 'ok', name: 'Sauti API', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api', apiRouter);

// 404 and error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sauti';

async function start() {
  try {
    // MongoDB connection
    if (process.env.USE_DB === 'true') {
      await mongoose.connect(MONGO_URI, { dbName: process.env.DB_NAME || 'sauti' });
      console.log('Connected to MongoDB');
    } else {
      console.log('Skipping DB connection (USE_DB not set to true)');
    }

    app.listen(PORT, () => {
      console.log(`Sauti API listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();
