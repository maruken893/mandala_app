import { Outlet } from 'react-router-dom';

import Wrapper from '../../assets/wrappers/Layout';
import { Sidebar, Header } from '../../components';
import SidebarModal from '../../components/SidebarModal';

const Layout = () => {
  return (
    <Wrapper>
      <SidebarModal />
      <Sidebar />
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
