import express from 'express';

import { register } from './auth.controller.js';

const router = express.Router();

router.route('/register').post(register);

export default router;
