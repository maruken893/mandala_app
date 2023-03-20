import express from 'express';

import {
  changeTodoStatus,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodos,
  getTodoCalendar,
  getTodoListInfo,
} from './todo.controller.js';
import { auth } from '../../middleware/index.js';

const router = express.Router();
router.route('/create-todo').post(auth, createTodo);
router.route('/update-todo').patch(auth, updateTodo);
router.route('/delete-todo').post(auth, deleteTodo);
router.route('/todos').get(auth, getTodos);
router.route('/todo-calendar').get(auth, getTodoCalendar);
router.route('/change-todo-status').patch(auth, changeTodoStatus);
router.route('/todo-info').get(auth, getTodoListInfo);

export default router;
