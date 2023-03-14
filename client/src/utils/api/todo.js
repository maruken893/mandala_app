import axios from 'axios';

import authConfig from '.';

export const fetchTodos = async ({ page }) => {
  const res = await axios.get(`/api/v1/todos?page=${page}`, authConfig);
  const { todos } = res.data;
  return todos;
};
