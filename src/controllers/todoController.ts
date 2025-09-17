import { Request, Response } from 'express';
import Todo from '../models/Todo';
import { AuthRequest } from '../middlewares/authMiddleware';

export async function createTodo(req: AuthRequest, res: Response) {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });

  const todo = await Todo.create({ title, owner: req.userId });
  res.status(201).json(todo);
}

export async function listTodos(req: AuthRequest, res: Response) {
  const todos = await Todo.find({ owner: req.userId }).sort({ createdAt: -1 });
  res.json(todos);
}

export async function updateTodo(req: AuthRequest, res: Response) {
  const { id } = req.params;
  const changes = req.body;
  const todo = await Todo.findOneAndUpdate({ _id: id, owner: req.userId }, changes, { new: true });
  if (!todo) return res.status(404).json({ message: 'Not found' });
  res.json(todo);
}

export async function deleteTodo(req: AuthRequest, res: Response) {
  const { id } = req.params;
  const todo = await Todo.findOneAndDelete({ _id: id, owner: req.userId });
  if (!todo) return res.status(404).json({ message: 'Not found' });
  res.status(204).send();
}
