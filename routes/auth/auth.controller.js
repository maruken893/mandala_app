import { StatusCodes } from 'http-status-codes';

import { User, GoalGenre, Mission, SubMission } from '../../models/index.js';
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
  createdUser.password = undefined;
  createdUser.updatedAt = undefined;
  createdUser.createdAt = undefined;
  res.status(StatusCodes.CREATED).json({
    user: {
      ...createdUser.dataValues,
      goal: null,
      GoalGenre: null,
    },
    token,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({
    where: { email },
    include: {
      model: GoalGenre,
      attributes: ['name'],
    },
  });
  if (!user) {
    throw new UnauthorizedError('Invalid Credentials');
  }
  const isCorrectPassword = await user.comparePassword(password);
  if (!isCorrectPassword) {
    throw new UnauthorizedError('Invalid Credentials');
  }
  const missionsData = await Mission.findAll({
    where: { UserId: user.id },
    attributes: ['content', 'position'],
    include: {
      model: SubMission,
      attributes: ['content', 'position'],
    },
  });
  const missions = missionsData.map((mission, i) => {
    if (i === 4) {
      return {
        cont: user.goal,
        goal: true,
      };
    } else {
      return {
        cont: mission.content,
        missionPos: mission.position,
      };
    }
  });
  let shapedMissions = [
    ...missionsData.slice(0, 4).map((mission) => {
      const shaped = mission.SubMissions.map((subMission) => {
        if (subMission.position === 4) {
          return {
            cont: mission.content,
            pos: subMission.position,
            missionPos: mission.position,
          };
        }
        return {
          cont: subMission.content,
          pos: subMission.position,
        };
      });
      return shaped;
    }),
    missions,
    ...missionsData.slice(5).map((mission) => {
      const shaped = mission.SubMissions.map((subMission) => {
        if (subMission.position === 4) {
          return {
            cont: mission.content,
            pos: mission.position,
          };
        }
        return {
          cont: subMission.content,
          pos: subMission.position,
        };
      });
      return shaped;
    }),
  ];
  user.password = undefined;
  user.GoalGenreId = undefined;
  user.goalGenreId = undefined;
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user, token, missions: shapedMissions });
};

export const updateUser = async (req, res) => {
  const { name, bio } = req.body;
  const user = await User.scope('withoutPassword').findOne({
    where: { id: req.user.uid },
    include: GoalGenre,
  });
  if (!user) {
    throw new UnauthorizedError('invalid token');
  }
  if (user.name === name && user.bio === bio) {
    throw new BadRequestError('No property to change');
  }
  const updatedUser = await user.update({
    name,
    bio,
  });
  const token = updatedUser.createJWT();
  res.status(StatusCodes.OK).json({
    user: updatedUser,
    token,
  });
};
