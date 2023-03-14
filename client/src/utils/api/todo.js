import axios from 'axios';

import authConfig from '.';

export const fetchTodos = async ({ page }) => {
  const res = await axios.get(`/api/v1/todos?page=${page}`, authConfig);
  const { todos } = res.data;
  return todos;
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
