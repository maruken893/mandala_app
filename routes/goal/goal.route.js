import express from 'express';

import { createGoal, getAllGoalGenres, getUserWithGoalGenre } from './goal.controller.js';
import { auth } from '../../middleware/index.js';

const router = express.Router();

router.route('/create-goal').patch(auth, createGoal);
router.route('/goal-genres').get(getAllGoalGenres);

// test
router.route('/user-goal-genre').get(auth, getUserWithGoalGenre);

export default router;
