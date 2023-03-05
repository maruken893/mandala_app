import { FaUserAlt } from 'react-icons/fa';

import Wrapper from '../assets/wrappers/UserInfo';
import UserLink from './UserLink';
import { useAppContext } from '../context/AppContext';

const UserInfo = ({ toggleUserEditing }) => {
  const { user } = useAppContext();
  const { name, bio } = user;

  return (
    <Wrapper>
      <div className="flex">
        <div className="icon">
          <FaUserAlt />
        </div>
        <button className="btn btn-edit" onClick={toggleUserEditing}>
          Edit Profile
        </button>
      </div>
      <p className="name">@{name}</p>
      <div className="user-links">
        <UserLink className="todo" label="todo" value={0} />
        <UserLink className="follower" label="followers" value={0} />
        <UserLink className="" label="following" value={0} />
      </div>
      <p className="bio-label">#bio</p>
      <p className="bio">{bio ? bio : 'No profile written.'}</p>
    </Wrapper>
  );
};
export default UserInfo;
