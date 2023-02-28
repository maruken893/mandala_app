import { StatusCodes } from 'http-status-codes';

export const register = (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};
