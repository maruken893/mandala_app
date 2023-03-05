import { StatusCodes } from 'http-status-codes';

import { User } from '../../models/index.js';
import { BadRequestError, UnauthorizedError } from '../../errors/index.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const alreadyExist = await User.scope('withoutAllValues').findOne({
    where: { email },
  });
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
  const isCorrectPassword = await user.comparePassword(password);
  if (!isCorrectPassword) {
    throw new UnauthorizedError('Invalid Credentials');
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user, token });
};

export const updateUser = async (req, res) => {
  const { name } = req.body;
  const user = await User.scope('withoutPassword').findOne({
    where: { id: req.user.uid },
  });
  if (!user) {
    throw new UnauthorizedError('invalid token');
  }
  if (user.name === name) {
    throw new BadRequestError('No property changes');
  }
  const updatedUser = await user.update({
    name,
  });
  const token = updatedUser.createJWT();
  res.status(StatusCodes.OK).json({
    user: updatedUser,
    token,
  });
};
