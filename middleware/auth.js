import jwt from 'jsonwebtoken';

import { UnauthorizedError } from '../errors/index.js';

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthorizedError('invalid token');
  }
  const token = authHeader.split(' ')[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_KEY);
    next();
  } catch (error) {
    throw new UnauthorizedError('invalid token');
  }
};

export default auth;
