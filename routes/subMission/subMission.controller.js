import { StatusCodes } from 'http-status-codes';

import { Mission, SubMission } from '../../models/index.js';
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
  const mission = await Mission.findOne({
    where: { UserId: req.user.uid, position: missionPosition },
    include: SubMission,
  });
  if (mission.SubMissions.length <= 0) {
    const positions = [8, 7, 6, 5, 3, 2, 1, 0];
    await SubMission.bulkCreate(
      positions.map((position) => {
        return {
          content: '',
          position,
          MissionId: mission.id,
        };
      })
    );
  }
  const subMission = await SubMission.findOne({
    where: { MissionId: mission.id, position },
  });
  subMission.update({ content });
  res.status(StatusCodes.OK).json({ msg: 'update sub mission', subMission });
};
