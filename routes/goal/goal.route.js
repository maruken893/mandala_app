import express from 'express';

import { createGoal } from './goal.controller.js';
import {auth} from '../../middleware/index.js'

const router = express.Router();

router.route('/create-goal').patch(auth, createGoal);

export default router;
