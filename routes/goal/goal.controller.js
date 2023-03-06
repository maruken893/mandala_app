import { StatusCodes } from 'http-status-codes';

import { User, GoalGenre } from '../../models/index.js';
import { goalGenres } from '../../models/GoalGenre.js';
import { BadRequestError, UnauthorizedError } from '../../errors/index.js';

export const createGoal = async (req, res) => {
  const { goal, goalGenreId } = req.body;
  // if (!goal || !goalGenreId) {
  //   throw new BadRequestError('Goal or goal genre is not provided');
  // }
  const user = await User.scope('withoutPassword').findOne({
    where: { id: req.user.uid },
  });
  if (!user) {
    throw new UnauthorizedError('user not found');
  }
  // if (user.goal !== null) {
  //   throw new BadRequestError('goal has already been created');
  // }
  await user.update({ goal, GoalGenreId: goalGenreId }, { include: GoalGenre });
  // ここにミッションとサブミッションを作成する処理を書く
  user.GoalGenreId = undefined;
  const updatedUser = {
    ...user.dataValues,
    GoalGenre: { id: goalGenreId, name: goalGenres[goalGenreId].name },
  };
  res.status(StatusCodes.CREATED).json({ user: updatedUser });
};

export const getAllGoalGenres = async (req, res) => {
  const goalGenres = await GoalGenre.findAll();
  res.status(StatusCodes.OK).json({ goalGenres });
};

export const getUserWithGoalGenre = async (req, res) => {
  const user = await User.scope('withoutPassword').findOne({
    where: { id: req.user.uid },
    include: GoalGenre,
  });
  res.status(StatusCodes.OK).json({ user });
};
