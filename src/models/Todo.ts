import { Schema, model, Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  completed: boolean;
  owner: string;
}

const todoSchema = new Schema<ITodo>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

export default model<ITodo>('Todo', todoSchema);
