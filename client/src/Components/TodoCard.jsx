import { GrStatusGoodSmall } from 'react-icons/gr';
import { MdOutlineEventAvailable } from 'react-icons/md';
import moment from 'moment';

import Wrapper from '../assets/wrappers/TodoCard';

const TodoCard = ({ todo }) => {
  return (
    <Wrapper>
      <div className="todo-header">
        <p className="todo-header-text">
          <span className={`icon-${todo.StatusId}`}>
            {<GrStatusGoodSmall />}
          </span>
          <span>{todo.content}</span>
        </p>
      </div>
      <div className="todo-body">
        <p className="due-date">
          <span>{<MdOutlineEventAvailable />}</span>
          {moment(todo.dueDate).format('YYYY-MM-D')}
        </p>
        <div className="btn-container">
          <button className="btn btn-edit-todo">Edit</button>
          <button className="btn btn-work-on">Work on</button>
          <button className="btn btn-delete-todo">Delete</button>
        </div>
      </div>
    </Wrapper>
  );
};
export default TodoCard;
