import { useState, useEffect } from 'react';

import Wrapper from '../../assets/wrappers/TodoList';
import { TodoCard } from '../../components';
import TodoPaginate from '../../components/TodoPaginate';
import { fetchTodos } from '../../utils/api/todo';

const TodoList = () => {
  const [todos, setTodos] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const updateTodos = ({ newTodo, idx }) => {
    setTodos((prev) => {
      const newTodos = [...prev];
      newTodos[idx] = newTodo;
      return newTodos;
    });
  };

  useEffect(() => {
    const initialFunc = async () => {
      const todos = await fetchTodos({ page: currentPage });
      setTodos(todos);
    };
    initialFunc();
  }, []);

  return (
    <Wrapper>
      <p className="header-text">Todos</p>
      <div className="todo-container">
        {todos &&
          todos.map((todo, idx) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              idx={idx}
              updateTodos={updateTodos}
            />
          ))}
      </div>
      <div className="pagination">
        <TodoPaginate />
      </div>
    </Wrapper>
  );
};
export default TodoList;
