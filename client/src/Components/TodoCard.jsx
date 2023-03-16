import { GrStatusGoodSmall } from 'react-icons/gr';
import { MdOutlineEventAvailable } from 'react-icons/md';
import moment from 'moment';

import Wrapper from '../assets/wrappers/TodoCard';
import { patchTodoStatus } from '../utils/api/todo';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const TodoCard = ({ todo, idx, updateTodos }) => {
  const { toggleEditTodo } = useAppContext();
  const navigate = useNavigate();

  const handleEdit = () => {
    console.log(todo.todoType);
    toggleEditTodo({
      id: todo.id,
      content: todo.content,
      dueDate: todo.dueDate,
      todoType: todo.todoType,
    });
    navigate('/todo/add');
  };

  const handleWorkOn = async () => {
    const newTodo = await patchTodoStatus({ id: todo.id, toStatusId: 2 });
    updateTodos({ newTodo, idx });
  };

  const handleSuspend = async () => {
    const newTodo = await patchTodoStatus({ id: todo.id, toStatusId: 1 });
    updateTodos({ newTodo, idx });
  };

  const handleComplete = async () => {
    const newTodo = await patchTodoStatus({ id: todo.id, toStatusId: 3 });
    updateTodos({ newTodo, idx });
  };

  return (
    <Wrapper>
      <div className="todo-header">
        <p className="todo-header-text">
          <span className={`icon icon-${todo.StatusId}`}>
            {<GrStatusGoodSmall />}
          </span>
          <span>{todo.content}</span>
        </p>
        <button
          type="button"
          className="btn btn-edit-todo"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
      <div className="todo-body">
        <p className="due-date">
          <span className="icon">{<MdOutlineEventAvailable />}</span>
          {moment(todo.dueDate).format('YYYY-MM-D')}
        </p>
        <div className="btn-container">
          {todo.StatusId === 1 && (
            <>
              <button
                type="button"
                className="btn btn-work-on"
                onClick={handleWorkOn}
              >
                Work on
              </button>
            </>
          )}
          {todo.StatusId === 2 && (
            <>
              <button
                type="button"
                className="btn btn-suspend"
                onClick={handleSuspend}
              >
                Suspend
              </button>
              <button
                type="button"
                className="btn btn-complete"
                onClick={handleComplete}
              >
                Complete
              </button>
            </>
          )}
          {todo.StatusId === 3 && (
            <>
              <button
                type="button"
                className="btn btn-work-on"
                onClick={handleWorkOn}
              >
                Work on
              </button>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default TodoCard;
