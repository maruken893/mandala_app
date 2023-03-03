import { Outlet } from 'react-router-dom';

import Wrapper from '../../assets/wrappers/Layout';
import { Logo, NavLinks, Header } from '../../components';

const Layout = () => {
  return (
    <Wrapper>
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
