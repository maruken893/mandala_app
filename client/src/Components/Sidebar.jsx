import { Logo, NavLinks } from '../components';
import Wrapper from '../assets/wrappers/Sidebar';

const Sidebar = () => {
  return (
    <Wrapper className="sidebar-container">
      <div className="logo-container">
        <Logo width="170px" />
      </div>
      <div className="links">
        <NavLinks />
      </div>
    </Wrapper>
  );
};
export default Sidebar;
