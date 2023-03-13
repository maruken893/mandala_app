import { StatusCodes } from 'http-status-codes';

import { User, Todo, Mission, Status } from '../../models/index.js';
import { UnauthorizedError, BadRequestError } from '../../errors/index.js';

export const createTodo = async (req, res) => {
  const { content, dueDate, missionPos } = req.body;
  const user = await User.findOne({ where: { id: req.user.uid } });
  if (!user) {
    throw new UnauthorizedError('User not found.');
  }
  const relatedMission = await Mission.findOne({
    where: { userId: user.id, position: missionPos },
  });
  console.log()
  if (!relatedMission) {
    throw new BadRequestError('There is no such mission.');
  }
  const newTodo = await Todo.create({
    content,
    dueDate,
    MissionId: relatedMission.id,
    UserId: req.user.uid,
  });
  res.status(StatusCodes.CREATED).json({ msg: 'create todo', newTodo });
};
