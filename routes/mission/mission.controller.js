import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthorizedError } from '../../errors/index.js';

import { User, Mission, SubMission } from '../../models/index.js';

export const updateMission = async (req, res) => {
  const { content, position } = req.body;
  if (!content) {
    throw new BadRequestError('Mission content is not provided');
  }
  if (
    !Number.isInteger(position) ||
    position === 4 ||
    position < 0 ||
    position > 8
  ) {
    throw new BadRequestError('provided position is invalid');
  }
  const user = await User.findOne({ where: { id: req.user.uid } });
  const mission = await Mission.findOne({
    where: { UserId: req.user.uid, position },
    include: { model: SubMission },
  });
  if (!mission) {
    throw new BadRequestError('mission not found');
  }
  if (mission.SubMissions.length <= 0) {
    await SubMission.bulkCreate(
      [...Array(9)].map((_, i) => {
        return {
          content: '',
          position: 8 - i,
          MissionId: mission.id,
        };
      })
    );
  }
  const updatedMission = await mission.update({ content });
  updatedMission.SubMissions = undefined;
  const missions = await user.fetchMissions();
  res.status(StatusCodes.OK).json({
    msg: 'mission updated',
    posMissions: missions[position],
    updatedMission: { cont: content, missionPos: position },
  });
};
