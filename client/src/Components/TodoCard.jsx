import { GrStatusGoodSmall } from 'react-icons/gr';
import { MdOutlineEventAvailable } from 'react-icons/md';
import moment from 'moment';

import Wrapper from '../assets/wrappers/TodoCard';
import { patchTodoStatus } from '../utils/api/todo';

const TodoCard = ({ todo, idx, updateTodos }) => {
  const handleWorkOn = async () => {
    const newTodo = await patchTodoStatus({ id: todo.id, toStatusId: 2 });
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
      </div>
      <div className="todo-body">
        <p className="due-date">
          <span className="icon">{<MdOutlineEventAvailable />}</span>
          {moment(todo.dueDate).format('YYYY-MM-D')}
        </p>
        <div className="btn-container">
          <button className="btn btn-edit-todo">Edit</button>
          <button
            type="button"
            className="btn btn-work-on"
            onClick={handleWorkOn}
          >
            Work on
          </button>
          <button className="btn btn-delete-todo">Delete</button>
        </div>
      </div>
    </Wrapper>
  );
};
export default TodoCard;
