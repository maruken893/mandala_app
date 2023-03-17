import { GrStatusGoodSmall } from 'react-icons/gr';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { FaRegStickyNote } from 'react-icons/fa';
import moment from 'moment';

import Wrapper from '../assets/wrappers/TodoCard';
import { deleteTodo, patchTodoStatus } from '../utils/api/todo';
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
      todoMemo: todo.memo,
    });
    navigate('/todo/add');
  };

  const handleDelete = async () => {
    const sure = window.confirm('Are you sure to delete todo?');
    if (sure) {
      await deleteTodo({ id: todo.id });
    }
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
        <div className="flex">
          <p className="todo-header-text">
            <span className={`icon icon-${todo.StatusId}`}>
              {<GrStatusGoodSmall />}
            </span>
            <span>{todo.content}</span>
          </p>
          <div>
            <button
              type="button"
              className="btn btn-edit-todo"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-delete-todo"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
        <p className="todo-type-text">{todo.todoType}</p>
      </div>
      <div className="todo-body">
        <div className="todo-due-date-container">
          <p className="todo-due-date-icon">
            {
              <MdOutlineEventAvailable
                style={{
                  width: '1.125rem',
                  height: 'auto',
                  verticalAlign: 'middle',
                  color: '#787878',
                }}
              />
            }
          </p>
          <p className="todo-due-date-text">
            {' '}
            {moment(todo.dueDate).format('YYYY-MM-D')}
          </p>
        </div>
        <div className="todo-memo-container">
          <p className="todo-memo-icon">
            {
              <FaRegStickyNote
                style={{
                  width: '1.125rem',
                  height: 'auto',
                  verticalAlign: 'middle',
                  color: '#787878',
                }}
              />
            }
          </p>
          <p className="todo-memo-text">{todo.memo || 'no memo'}</p>
        </div>
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
