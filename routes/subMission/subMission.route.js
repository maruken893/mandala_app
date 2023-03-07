import express from 'express';

import { updateSubMission } from './subMission.controller.js';
import {auth} from '../../middleware/index.js'

const router = express.Router();

router.route('/update-sub-mission').patch(auth, updateSubMission);

export default router;
