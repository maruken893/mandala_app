import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Wrapper from '../../assets/wrappers/TodoLayout';
import TodoNav from '../../components/TodoNav';
import { fetchTodos } from '../../utils/api/todo';

const TodoLayout = () => {
  const [todos, setTodos] = useState(null);
  const [todoCount, setTodoCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const initialFunc = async () => {
      const { todos, todoCount } = await fetchTodos({ page: currentPage });
      setTodos(todos);
      setTodoCount(todoCount);
    };
    initialFunc();
  }, []);

  return (
    <Wrapper>
      <TodoNav />
      <Outlet
        context={[
          todos,
          setTodos,
          todoCount,
          setTodoCount,
          currentPage,
          setCurrentPage,
        ]}
      />
    </Wrapper>
  );
};
export default TodoLayout;
