import express from 'express';

import { createTodo, getTodos } from './todo.controller.js';
import { auth } from '../../middleware/index.js';

const router = express.Router();
router.route('/create-todo').post(auth, createTodo);
router.route('/todos').get(auth, getTodos);

export default router;
