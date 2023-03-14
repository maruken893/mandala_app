import { useState } from 'react';
import { GrStatusGoodSmall } from 'react-icons/gr';

import Wrapper from '../assets/wrappers/TodoCardInProgress';
import { FormTextarea } from '.';

const TodoCardInProgress = ({ todo }) => {
  const [todoMemo, setTodoMemo] = useState('');
  const handleChangeMemo = (e) => {
    setTodoMemo(e.target.value);
  };

  return (
    <Wrapper>
      <div className="todo-header">
        <div className="todo-header-text">
          <span>{<GrStatusGoodSmall />}</span>
          <span>{todo.content}</span>
        </div>
      </div>
      <div className="todo-body">
        <p className="due-date">{todo.dueDate}</p>
        <form action="">
          <FormTextarea
            name="memo"
            label="Memo"
            value={todoMemo}
            handleChange={handleChangeMemo}
          />
          <div className="btn-container">
            <button type="button" className="btn btn-suspend">
              Suspend
            </button>
            <button type="submit" className="btn btn-complete">
              Complete
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
export default TodoCardInProgress;
