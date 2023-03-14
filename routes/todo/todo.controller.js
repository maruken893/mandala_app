import { StatusCodes } from 'http-status-codes';

import { User, Todo, Mission, Status } from '../../models/index.js';
import { UnauthorizedError, BadRequestError } from '../../errors/index.js';

export const createTodo = async (req, res) => {
  const { content, dueDate } = req.body;
  const user = await User.findOne({ where: { id: req.user.uid } });
  if (!user) {
    throw new UnauthorizedError('User not found.');
  }
  const newTodo = await Todo.create({
    content,
    dueDate,
    UserId: req.user.uid,
  });
  res.status(StatusCodes.CREATED).json({
    msg: 'create todo',
    newTodo,
  });
};

export const getTodos = async (req, res) => {
  const PAGE_NUM = 10;
  const page = !req?.query.page ? 0 : req.query.page;

  const todos = await Todo.findAll(
    {
      where: { UserId: req.user.uid },
      limit: PAGE_NUM,
      offset: PAGE_NUM * page,
    },
  );
  res.status(StatusCodes.OK).json({ msg: 'return todos', todos });
};
