import sequelize from 'sequelize';
import { StatusCodes } from 'http-status-codes';
import { NUMBER, Op } from 'sequelize';

import { User, Todo, Mission, Status } from '../../models/index.js';
import { UnauthorizedError, BadRequestError } from '../../errors/index.js';

export const createTodo = async (req, res) => {
  const { content, dueDate, todoType, memo } = req.body;
  // if (!content && !dueDate && !todoType) {
  //   throw new BadRequestError('Provide required property.')
  // }
  const user = await User.findOne({ where: { id: req.user.uid } });
  if (!user) {
    throw new UnauthorizedError('User not found.');
  }
  const newTodo = await Todo.create({
    content,
    dueDate: dueDate,
    todoType: todoType,
    memo: memo || '',
    UserId: req.user.uid,
  });
  res.status(StatusCodes.CREATED).json({
    msg: 'create todo',
    newTodo,
  });
};

export const updateTodo = async (req, res) => {
  const { id, content, dueDate, todoType, memo } = req.body;
  const todo = await Todo.findOne({
    where: { id },
  });
  if (!todo) {
    throw new BadRequestError('Todo not found.');
  }
  if (todo.UserId !== req.user.uid) {
    throw new UnauthorizedError("You can't change todo info.");
  }
  const updatedTodo = await todo.update({
    content,
    dueDate,
    todoType: todoType || '',
    memo: memo || '',
  });
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
  // TODO: マジックナンバーどうにかしたい
  if (toStatusId == 3) {
    const updatedTodo = await todo.update({
      StatusId: toStatusId,
      endDate: new Date(),
    });
    res.status(StatusCodes.OK).json({ msg: 'change', todo: updatedTodo });
    return;
  }
  const updatedTodo = await todo.update({ StatusId: toStatusId });
  res.status(StatusCodes.OK).json({ msg: 'change', todo: updatedTodo });
};

export const deleteTodo = async (req, res) => {
  const { id } = req.body;
  const todo = await Todo.findOne({ where: { id } });
  if (todo.UserId !== req.user.uid) {
    throw new UnauthorizedError('You cant delete todo');
  }
  await todo.destroy();
  res.status(StatusCodes.OK).json({ msg: 'Todo deleted successfully' });
};

export const getTodos = async (req, res) => {
  const PAGE_NUM = 12;
  const page = !req?.query.page ? 0 : req.query.page;

  const todos = await Todo.findAll({
    where: { UserId: req.user.uid },
    limit: PAGE_NUM,
    offset: PAGE_NUM * page,
    order: [['createdAt', 'DESC']],
  });
  const todoCount = await Todo.count({ where: { UserId: req.user.uid } });
  res.status(StatusCodes.OK).json({ msg: 'return todos', todos, todoCount });
};

export const getTodoCalendar = async (req, res) => {
  const { year, month, notStarted, done } = req.query;
  const NUMBER_OF_DAYS = new Date(year, month, 0).getDate();
  let notStartedTodoList;
  let doneTodoList;

  if (notStarted === 'true') {
    notStartedTodoList = await Todo.findAll({
      where: {
        UserId: req.user.uid,
        StatusId: [1],
        dueDate: {
          [Op.gte]: `${year}-${month}-01 00:00:00`,
          [Op.lte]: `${year}-${month}-${NUMBER_OF_DAYS} 23:59:59`,
        },
      },
      attributes: [
        'id',
        ['content', 'title'],
        [
          sequelize.fn('date_format', sequelize.col('dueDate'), '%Y-%m-%d'),
          'start',
        ],
        'StatusId',
      ],
      order: [['dueDate', 'ASC']],
    });
  }

  if (done === 'true') {
    doneTodoList = await Todo.findAll({
      where: {
        UserId: req.user.uid,
        StatusId: [3],
        dueDate: {
          [Op.gte]: `${year}-${month}-01 00:00:00`,
          [Op.lte]: `${year}-${month}-${NUMBER_OF_DAYS} 23:59:59`,
        },
      },
      attributes: [
        'id',
        ['content', 'title'],
        [
          sequelize.fn('date_format', sequelize.col('endDate'), '%Y-%m-%d'),
          'start',
        ],
        'StatusId',
      ],
      order: [['dueDate', 'ASC']],
    });
  }

  res.status(StatusCodes.OK).json({
    year,
    month,
    notStartedTodoList: notStartedTodoList || [],
    doneTodoList: doneTodoList || [],
  });
};

export const getTodoListInfo = async (req, res) => {
  const notStartedNum = await Todo.count({
    where: { UserId: req.user.uid, StatusId: 1 },
  });
  const inProgressNum = await Todo.count({
    where: { UserId: req.user.uid, StatusId: 2 },
  });
  const doneNum = await Todo.count({
    where: { UserId: req.user.uid, StatusId: 3 },
  });
  res.status(StatusCodes.OK).json({ notStartedNum, inProgressNum, doneNum });
};
