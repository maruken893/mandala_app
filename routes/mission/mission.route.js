import express from 'express';

import { auth } from '../../middleware/index.js';
import { updateMission } from './mission.controller.js';

const router = express.Router();

router.route('/update-mission').patch(auth, updateMission);

export default router;
