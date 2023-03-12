import { StatusCodes } from 'http-status-codes';

import { User, Mission, SubMission } from '../../models/index.js';
import { BadRequestError } from '../../errors/index.js';

export const updateSubMission = async (req, res) => {
  const { content, position, missionPosition } = req.body;
  if (!content) {
    throw new BadRequestError('content is not provided');
  }
  if (
    !Number.isInteger(position) ||
    position === 4 ||
    position < 0 ||
    position > 8
  ) {
    throw new BadRequestError('position is invalid');
  }
  if (
    !Number.isInteger(missionPosition) ||
    missionPosition === 4 ||
    missionPosition < 0 ||
    missionPosition > 8
  ) {
    throw new BadRequestError('mission position is invalid');
  }
  const user = await User.findOne({ where: { id: req.user.uid } });
  const mission = await Mission.findOne({
    where: { UserId: req.user.uid, position: missionPosition },
    include: SubMission,
  });
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
  const subMission = await SubMission.findOne({
    where: { MissionId: mission.id, position },
  });
  await subMission.update({ content });
  const missions = await user.fetchMissions();
  res.status(StatusCodes.OK).json({
    msg: 'update sub mission',
    posMissions: missions[missionPosition]
  });
};
