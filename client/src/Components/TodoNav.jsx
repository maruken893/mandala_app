import { NavLink } from 'react-router-dom';

import Wrapper from '../assets/wrappers/TodoNav';
import { todoLinks } from '../utils/links';

const TodoNav = () => {
  return (
    <Wrapper>
      {todoLinks.map(({ to, text, id }) => (
        <NavLink
          key={id}
          to={to}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {text}
        </NavLink>
      ))}
    </Wrapper>
  );
};
export default TodoNav;
