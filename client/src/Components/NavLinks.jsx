import { NavLink } from 'react-router-dom';

import Wrapper from '../assets/wrappers/NavLinks';
import links from '../utils/links';

const NavLinks = () => {
  return (
    <Wrapper>
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.to}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined;
          }}
        >
          <span className="icon">{link.icon}</span>
          <span className="text">{link.text}</span>
        </NavLink>
      ))}
    </Wrapper>
  );
};
export default NavLinks;
