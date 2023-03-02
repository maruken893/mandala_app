import { StatusCodes } from 'http-status-codes';

import { User } from '../../models/index.js';
import { BadRequestError, UnauthorizedError } from '../../errors/index.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if ((!name, !email, !password)) {
    throw new BadRequestError('Please provide all values');
  }
  const alreadyExist = await User.findOne({ where: { email } });
  if (alreadyExist) {
    throw new BadRequestError('Email has already been taken');
  }
  const createdUser = await User.create({ name, email, password });
  const token = createdUser.createJWT();
  console.log(token);
  res.status(StatusCodes.CREATED).json({ user: { name, email }, token });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new UnauthorizedError('Invalid Credentials');
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new UnauthorizedError('Invalid Credentials');
  }
  user.password = null;
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user, token });
};
