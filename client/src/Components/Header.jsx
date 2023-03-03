import { useAppContext } from '../context/AppContext';
import { FaUserAlt } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

import Wrapper from '../assets/wrappers/Header';
import { VscThreeBars } from 'react-icons/vsc';
import Logo from './Logo';

const Header = () => {
  const { user, openSidebarModal } = useAppContext();
  const { id, name } = user;

  const toggleUserInfo = () => {
    console.log('toggle user info');
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
        <div className="user-info">
          <div className="user-icon">
            <FaUserAlt />
          </div>
          {name.length > 9 ? `${name.slice(0, 10)}...` : name}
          <button className="user-toggle" onClick={toggleUserInfo}>
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Header;
