import { FaUserAlt } from 'react-icons/fa';

import Wrapper from '../assets/wrappers/UserInfo';
import UserLink from './UserLink';

const UserInfo = () => {
  const handleEditButton = () => {
    console.log('edit user toggle');
  };

  return (
    <Wrapper>
      <div className="flex">
        <div className="icon">
          <FaUserAlt />
        </div>
        <button className="btn btn-edit" onClick={handleEditButton}>
          Edit Profile
        </button>
      </div>
      <p className="name">@name</p>
      <div className="user-links">
        <UserLink className="todo" label="todo" value={0} />
        <UserLink className="follower" label="followers" value={0} />
        <UserLink className="" label="following" value={0} />
      </div>
      <p className="bio-label">#bio</p>
      <p className="bio">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        fugiat eum, laudantium alias voluptatem quasi voluptates mollitia rerum
        culpa.
      </p>
    </Wrapper>
  );
};
export default UserInfo;
