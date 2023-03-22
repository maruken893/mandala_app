import { useOutletContext } from 'react-router-dom';

import Wrapper from '../../assets/wrappers/TodoList';
import { TodoCard } from '../../components';
import TodoPaginate from '../../components/TodoPaginate';

const TodoList = () => {
  const {
    todos,
    setTodos,
    todoCount,
    setTodoCount,
    currentPage,
    setCurrentPage,
  } = useOutletContext();

  const updateTodos = ({ newTodo, idx }) => {
    setTodos((prev) => {
      const newTodos = [...prev];
      newTodos[idx] = newTodo;
      return newTodos;
    });
  };

  return (
    <Wrapper>
      <p className="header-text">
        {todos?.length > 0
          ? `${todoCount} Todos found`
          : 'No Todos to display.'}
      </p>
      <div className="todo-container">
        {todos?.length > 0 &&
          todos.map((todo, idx) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              idx={idx}
              updateTodos={updateTodos}
            />
          ))}
      </div>
      {
        <div className="pagination">
          {todos?.length > 0 && (
            <TodoPaginate
              setTodos={setTodos}
              setTodoCount={setTodoCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              todoCount={todoCount}
            />
          )}
        </div>
      }
    </Wrapper>
  );
};
export default TodoList;
