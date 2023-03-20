import { GrStatusGoodSmall } from 'react-icons/gr';

import Wrapper from '../assets/wrappers/TodoStatus';

const TodoStatus = ({todoStatus}) => {
  return (
    <Wrapper className="todo-status-container">
      <p className='todo-status-header-text'>Todo Status</p>
      <div className="status-container">
        <p className="todo-status-text">
          <span className={'icon icon-1'}>{<GrStatusGoodSmall />}</span>
          <span>Not Started : {todoStatus.notStartedNum}</span>
        </p>
        <p className="todo-status-text">
          <span className={'icon icon-2'}>{<GrStatusGoodSmall />}</span>
          <span>In Progress : {todoStatus.inProgressNum}</span>
        </p>
        <p className="todo-status-text">
          <span className={'icon icon-3'}>{<GrStatusGoodSmall />}</span>
          <span>Done : {todoStatus.doneNum}</span>
        </p>
      </div>
    </Wrapper>
  );
};
export default TodoStatus;
