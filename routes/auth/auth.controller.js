import { StatusCodes } from 'http-status-codes';

import { User } from '../../models/index.js';
import { BadRequestError } from '../../errors/index.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if ((!name, !email, !password)) {
    throw new BadRequestError('Please provide all values');
  }
  const alreadyExist = await User.findOne({ where: { email } });
  if (alreadyExist) {
    throw new BadRequestError('Email has already been taken');
  }
  await User.create({ name, email, password });
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name, email }, token: 'fdalffdalfjasf' });
};
