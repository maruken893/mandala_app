import express from 'express';

import {
  changeTodoStatus,
  createTodo,
  updateTodo,
  getTodos,
} from './todo.controller.js';
import { auth } from '../../middleware/index.js';

const router = express.Router();
router.route('/create-todo').post(auth, createTodo);
router.route('/update-todo').patch(auth, updateTodo);
router.route('/todos').get(auth, getTodos);
router.route('/change-todo-status').patch(auth, changeTodoStatus);

export default router;
