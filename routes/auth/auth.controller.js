import { StatusCodes } from 'http-status-codes';

import { User } from '../../models/index.js'

export const register = async (req, res) => {
  const { userName, email, password } = req.body;
  await User.create({userName, email, password})
  res.status(StatusCodes.CREATED).json({ userName, email, password });
};
