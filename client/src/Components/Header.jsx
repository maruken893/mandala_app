import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { VscThreeBars } from 'react-icons/vsc';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { useAppContext } from '../context/AppContext';

import Wrapper from '../assets/wrappers/Header';
import Logo from './Logo';

const Header = () => {
  const { user, openSidebarModal, logoutUser } = useAppContext();
  const { id, name } = user;
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = () => {
    setShowLogout((prev) => !prev);
  };

  const handleLogout = () => {
    logoutUser();
    return <Navigate to="/auth" />;
  };

  return (
    <Wrapper>
      <div className="header-container">
        <button type="button" className="toggle-btn" onClick={openSidebarModal}>
          <VscThreeBars />
        </button>
        <span className="logo">
          <Logo width="100px" />
        </span>
        <div className="user-info-container">
          <div className="user-info">
            <div className="user-icon">
              <FaUserAlt />
            </div>
            {name.length > 9 ? `${name.slice(0, 10)}...` : name}
            <button className="user-toggle" onClick={toggleLogout}>
              <BsThreeDotsVertical />
            </button>
          </div>
          {showLogout && (
            <button
              type="button"
              className="btn btn-logout"
              onClick={handleLogout}
            >
              logout
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default Header;
