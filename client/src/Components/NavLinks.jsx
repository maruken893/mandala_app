import { NavLink } from 'react-router-dom';

import Wrapper from '../assets/wrappers/NavLinks';
import { useAppContext } from '../context/AppContext';
import links from '../utils/links';

const NavLinks = () => {
  const { closeSidebarModal } = useAppContext();

  return (
    <Wrapper>
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.to}
          onClick={closeSidebarModal}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined;
          }}
        >
          <div className="link-element">
            <span className="icon">{link.icon}</span>
            <span className="text">{link.text}</span>
          </div>
        </NavLink>
      ))}
    </Wrapper>
  );
};
export default NavLinks;
