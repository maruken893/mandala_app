import axios from 'axios';

import authConfig from '.';

export const fetchTodos = async ({ page }) => {
  const res = await axios.get(`/api/v1/todos?page=${page}`, authConfig);
  const { todos, todoCount } = res.data;
  return { todos, todoCount };
};

export const patchTodoStatus = async ({ id, toStatusId }) => {
  const res = await axios.patch(
    '/api/v1/change-todo-status',
    { id, toStatusId },
    authConfig
  );
  const { todo } = res.data;
  return todo;
};

export const deleteTodo = async ({ id }) => {
  await axios.post(`/api/v1/delete-todo`, { id }, authConfig);
  return;
};

export const fetchTodoForCalendar = async ({ year, month, fetchTypes }) => {
  const { notStarted, done } = fetchTypes;
  const res = await axios.get(
    `api/v1/todo-calendar?year=${year}&month=${month}&notStarted=${notStarted}&done=${done}`,
    authConfig
  );
  const { notStartedTodoList, doneTodoList } = res.data;
  return { notStartedTodoList, doneTodoList };
};
