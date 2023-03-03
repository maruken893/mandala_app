import { Outlet } from 'react-router-dom';

import Wrapper from '../../assets/wrappers/Layout';
import { Logo, NavLinks, Header } from '../../components';
import SidebarModal from '../../components/SidebarModal';

const Layout = () => {
  return (
    <Wrapper>
      <SidebarModal />
      <div className="sidebar-container">
        <Logo width="170px" />
        <NavLinks />
      </div>
      <div className="right-container">
        <Header />
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};
export default Layout;
