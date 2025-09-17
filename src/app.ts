import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { connectDB } from './config/db';
import authRoutes from './routes/auth';
import todoRoutes from './routes/todos';
import { errorHandler } from './middlewares/errorHandler';

export async function start() {
  await connectDB();
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => res.json({ message: 'Todo API (TypeScript)' }));

  app.use('/api/auth', authRoutes);
  app.use('/api/todos', todoRoutes);

  app.use(errorHandler);
  return app;
}
