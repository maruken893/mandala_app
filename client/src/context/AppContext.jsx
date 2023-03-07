import { useReducer, createContext, useContext } from 'react';
import axios from 'axios';

import reducer from './reducer';
import {
  SHOW_ALERT,
  CLEAR_ALERT,
  OPEN_SIDEBAR_MODAL,
  CLOSE_SIDEBAR_MODAL,
  USER_REGISTER_BEGIN,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_BEGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_UPDATE_BEGIN,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILED,
  REQUEST_BEGIN,
  GOAL_CREATE_SUCCESS,
  GOAL_CREATE_FAILED,
} from './action';

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: '',
  alertType: '',
  showSidebarModal: false,
  // auth info
  user: JSON.parse(user) || null,
  token: token || '',
  missions: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = ({ msg, type }) => {
    dispatch({ type: SHOW_ALERT, payload: { msg, type } });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const openSidebarModal = () => {
    dispatch({ type: OPEN_SIDEBAR_MODAL });
  };

  const closeSidebarModal = () => {
    dispatch({ type: CLOSE_SIDEBAR_MODAL });
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const registerUser = async ({ user }) => {
    dispatch({ type: USER_REGISTER_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/register', user);
      const { user: createdUser, token } = response.data;
      addUserToLocalStorage({ user: createdUser, token });
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: {
          user: createdUser,
          token,
          msg: 'Account created successfully redirecting ...',
        },
      });
    } catch (error) {
      console.error(error);
      const { msg } = error.response.data;
      // console.error(msg);
      dispatch({ type: USER_REGISTER_FAILED, payload: { msg } });
    }
    clearAlert();
  };

  const login = async ({ user }) => {
    dispatch({ type: USER_LOGIN_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/login', user);
      const { user: loginUser, token, missions } = response.data;
      addUserToLocalStorage({ user: loginUser, token });
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          user: loginUser,
          token,
          msg: 'Login successful',
          missions,
        },
      });
    } catch (error) {
      const { msg } = error.response.data;
      dispatch({ type: USER_LOGIN_FAILED, payload: { msg } });
    }
    clearAlert();
  };

  const updateUser = async ({ name, bio }) => {
    dispatch({ type: USER_UPDATE_BEGIN });
    try {
      const response = await axios.patch(
        '/api/v1/auth/update-user',
        { name, bio },
        config
      );
      const { user } = response.data;
      dispatch({ type: USER_UPDATE_SUCCESS, payload: { user } });
    } catch (error) {
      const { msg } = error.response.data;
      dispatch({ type: USER_UPDATE_FAILED, payload: { msg } });
    }
    clearAlert();
  };

  const createGoal = async ({ goal, goalGenreId }) => {
    dispatch({ type: REQUEST_BEGIN });
    try {
      const response = await axios.patch(
        '/api/v1/create-goal',
        { goal, goalGenreId },
        config
      );
      const { user } = response.data;
      dispatch({ type: GOAL_CREATE_SUCCESS, payload: { user } });
    } catch (error) {
      const { msg } = error.response.data;
      dispatch({ type: GOAL_CREATE_FAILED, payload: { msg } });
    }
    // clearAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        login,
        openSidebarModal,
        closeSidebarModal,
        updateUser,
        createGoal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
