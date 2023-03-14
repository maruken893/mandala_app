import express from 'express';

import { workOnTodo, createTodo, getTodos } from './todo.controller.js';
import { auth } from '../../middleware/index.js';

const router = express.Router();
router.route('/create-todo').post(auth, createTodo);
router.route('/todos').get(auth, getTodos);
router.route('/work-on-todo').patch(auth, workOnTodo);

export default router;
