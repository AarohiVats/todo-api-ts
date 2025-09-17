import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { createTodo, listTodos, updateTodo, deleteTodo } from '../controllers/todoController';

const router = Router();

router.use(authMiddleware);

router.post('/', createTodo);
router.get('/', listTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
