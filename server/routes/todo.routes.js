import { Router } from 'express';
import * as TodoController from '../controllers/todo.controller';
const router = new Router();

// Get all Todos
router.route('/todos').get(TodoController.getTodos);

// Get one todo by cuid
router.route('/todos/:cuid').get(TodoController.getTodo);

// Add a new Todo
router.route('/todos').post(TodoController.addTodo);

// Delete a todo by cuid
router.route('/todos/:cuid').delete(TodoController.deleteTodo);

export default router;
