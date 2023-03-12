import { StatusCodes } from 'http-status-codes';

import { User, GoalGenre, Mission } from '../../models/index.js';
import { goalGenres } from '../../models/GoalGenre.js';
import { BadRequestError, UnauthorizedError } from '../../errors/index.js';

export const createGoal = async (req, res) => {
  const { goal, goalGenreId } = req.body;
  if (!goal || !goalGenreId) {
    throw new BadRequestError('Goal or goal genre is not provided');
  }
  const user = await User.scope('withoutPassword').findOne({
    where: { id: req.user.uid },
  });
  console.log(user)
  if (!user) {
    throw new UnauthorizedError('user not found');
  }
  if (user.goal !== null) {
    throw new BadRequestError('goal has already been created');
  }
  await user.update({ goal, GoalGenreId: goalGenreId }, { include: GoalGenre });
  await Mission.bulkCreate(
    [...Array(9)].map((_, i) => ({
      content: '',
      position: i,
      UserId: user.id,
    }))
  );
  user.GoalGenreId = undefined;
  const updatedUser = {
    ...user.dataValues,
    GoalGenre: { id: goalGenreId, name: goalGenres[goalGenreId].name },
  };
  const token = user.createJWT();
  const missions = await user.fetchMissions();
  res.status(StatusCodes.CREATED).json({ user: updatedUser, token, missions });
};

export const updateGoal = async (req, res) => {
  const { goal, goalGenreId } = req.body;
  if (!goal && !goalGenreId) {
    throw new BadRequestError('properties not provided');
  }
  const user = await User.scope('withoutPassword').findOne({
    where: { id: req.user.uid },
  });
  if (!user) {
    throw new UnauthorizedError('user not found');
  }
  await user.update({ goal, GoalGenreId: goalGenreId }, { include: GoalGenre });
  user.GoalGenreId = undefined;
  const updatedUser = {
    ...user.dataValues,
    GoalGenre: { id: goalGenreId, name: goalGenres[goalGenreId].name },
  };
  res.status(StatusCodes.OK).json({ user: updatedUser });
};

export const getAllGoalGenres = async (req, res) => {
  const goalGenres = await GoalGenre.findAll();
  res.status(StatusCodes.OK).json({ goalGenres });
};
