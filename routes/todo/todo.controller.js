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

export const updateTodo = async (req, res) => {
  const { id, content, dueDate } = req.body;
  const todo = await Todo.findOne({
    where: { id },
  });
  if (!todo) {
    throw new BadRequestError('Todo not found.');
  }
  if (todo.UserId !== req.user.uid) {
    throw new UnauthorizedError("You can't change todo info.");
  }
  const updatedTodo = await todo.update({ content, dueDate });
  res.status(StatusCodes.OK).json({ msg: 'updated', todo: updatedTodo });
};

export const changeTodoStatus = async (req, res) => {
  const { id, toStatusId } = req.body;
  const todo = await Todo.findOne({
    where: { id },
  });
  if (!todo) {
    throw new BadRequestError('Todo not found.');
  }
  if (todo.UserId !== req.user.uid) {
    throw new UnauthorizedError("You can't change todo info.");
  }
  if (!todo.StatusId === toStatusId) {
    throw new BadRequestError('Todo status not change');
  }
  const updatedTodo = await todo.update({ StatusId: toStatusId });
  res.status(StatusCodes.OK).json({ msg: 'change', todo: updatedTodo });
};

export const getTodos = async (req, res) => {
  const PAGE_NUM = 12;
  const page = !req?.query.page ? 0 : req.query.page;

  const todos = await Todo.findAll({
    where: { UserId: req.user.uid },
    limit: PAGE_NUM,
    offset: PAGE_NUM * page,
  });
  res.status(StatusCodes.OK).json({ msg: 'return todos', todos });
};
