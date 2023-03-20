import { useEffect, useState } from 'react';

import Wrapper from '../../assets/wrappers/Profile';
import { UserInfo, UserEdit } from '../../components';
import TodoStatus from '../../components/TodoStatus';
import { fetchTodoInfo } from '../../utils/api/todo';

const initTodoStatus = {
  notStartedNum: null,
  inProgressNum: null,
  doneNum: null,
};

const Profile = () => {
  const [isUserEditing, setIsUserEditing] = useState(false);
  const [todoStatus, setTodoStatus] = useState(initTodoStatus);

  const todoNum = () => {
    return Object.values(todoStatus).reduce((prev, curr) => prev + curr)
  }

  const toggleUserEditing = () => {
    console.log('toggle edit');
    setIsUserEditing((prev) => !prev);
  };

  useEffect(() => {
    const initFetchTodoInfo = async () => {
      const { notStartedNum, inProgressNum, doneNum } = await fetchTodoInfo();
      setTodoStatus({ notStartedNum, inProgressNum, doneNum });
    };
    initFetchTodoInfo();
  }, []);

  return (
    <Wrapper>
      <div className="profile-container">
        <div className="flex">
          {isUserEditing ? (
            <UserEdit toggleUserEditing={toggleUserEditing} />
          ) : (
            <UserInfo toggleUserEditing={toggleUserEditing} todoNum={todoNum()} />
          )}
          <TodoStatus todoStatus={todoStatus} />
        </div>
      </div>
    </Wrapper>
  );
};
export default Profile;
