import { StatusCodes } from 'http-status-codes';

import { User } from '../../models/index.js';
import { BadRequestError, UnauthorizedError } from '../../errors/index.js';

export const createGoal = async (req, res) => {
  const { goal } = req.body;
  if (!goal) {
    throw new BadRequestError('Goal is not provided');
  }
  const user = await User.scope('withoutPassword').findOne({
    where: { id: req.user.uid },
  });
  if (!user) {
    throw new UnauthorizedError('user not found');
  }
  if (user.goal !== null) {
    throw new BadRequestError('goal has already been created');
  }
  await user.update({ goal });
  // ここにミッションとサブミッションを作成する処理を書く
  res.status(StatusCodes.CREATED).json({ user });
};
