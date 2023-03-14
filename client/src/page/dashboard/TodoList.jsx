import { useState, useEffect } from 'react';

import Wrapper from '../../assets/wrappers/TodoList';
import { TodoCard } from '../../components';
import { fetchTodos } from '../../utils/api/todo';

const TodoList = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const initialFunc = async () => {
      const todos = await fetchTodos({ page: 0 });
      setTodos(todos);
    };
    initialFunc();
  }, []);

  return (
    <Wrapper>
      <p className="header-text">Todos</p>
      <div className="todo-container">
        {todos && todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
      </div>
    </Wrapper>
  );
};
export default TodoList;
