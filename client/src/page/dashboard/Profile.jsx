import { useState } from 'react';

import Wrapper from '../../assets/wrappers/Profile';
import { UserInfo, UserEdit } from '../../components';

const Profile = () => {
  const [isUserEditing, setIsUserEditing] = useState(false);

  const toggleUserEditing = () => {
    console.log('toggle edit');
    setIsUserEditing((prev) => !prev);
  };

  return (
    <Wrapper>
      {isUserEditing ? (
        <UserEdit toggleUserEditing={toggleUserEditing} />
      ) : (
        <UserInfo toggleUserEditing={toggleUserEditing} />
      )}
    </Wrapper>
  );
};
export default Profile;
