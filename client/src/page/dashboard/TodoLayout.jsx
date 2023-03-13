import { Outlet } from 'react-router-dom';

import Wrapper from '../../assets/wrappers/TodoLayout';
import TodoNav from '../../components/TodoNav';

const TodoLayout = () => {
  return (
    <Wrapper>
      <TodoNav />
      <Outlet />
    </Wrapper>
  );
};
export default TodoLayout;
