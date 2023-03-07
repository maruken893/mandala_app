import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthorizedError } from '../../errors/index.js';

import { User, Mission } from '../../models/index.js';

export const updateMission = async (req, res) => {
  const { content, position } = req.body;
  if (content === null) {
    throw new BadRequestError('Mission content is not provided');
  }
  if (
    !!Number.isInteger(position) ||
    position === 4 ||
    position < 0 ||
    position > 8
  ) {
    throw new BadRequestError('provided position is invalid');
  }
  const mission = await Mission.findOne({
    where: { UserId: req.user.uid, position },
  });
  if (!mission) {
    throw new BadRequestError('mission not found');
  }
  const updatedMission = await mission.update({ content });

  res
    .status(StatusCodes.OK)
    .json({ msg: 'mission updated', mission: updatedMission });
};
