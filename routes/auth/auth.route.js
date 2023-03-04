import express from 'express';

import { register, login, updateUser } from './auth.controller.js';
import { auth } from '../../middleware/index.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/update-user').patch(auth, updateUser);

export default router;
