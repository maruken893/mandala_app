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
  USER_LOGOUT,
  USER_UPDATE_BEGIN,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILED,
  REQUEST_BEGIN,
  GOAL_CREATE_SUCCESS,
  GOAL_CREATE_FAILED,
  GOAL_UPDATE_SUCCESS,
  GOAL_UPDATE_FAILED,
  MISSION_UPDATE_SUCCESS,
  MISSION_UPDATE_FAILED,
  SUB_MISSION_UPDATE_SUCCESS,
  SUB_MISSION_UPDATE_FAILED,
  TODO_CREATE_SUCCESS,
  TODO_CREATE_FAILED,
  TOGGLE_EDIT_TODO,
  CANCEL_EDIT_TODO,
  CHANGE_TODO_STATE,
  TODO_UPDATE_SUCCESS,
  TODO_UPDATE_FAILED,
} from './action';

let initUser = localStorage.getItem('user');
let initToken = localStorage.getItem('token');
let initMissions = localStorage.getItem('missions');

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: '',
  alertType: '',
  showSidebarModal: false,
  // auth info
  user: JSON.parse(initUser) || null,
  token: initToken || '',
  missions: JSON.parse(initMissions) || null,
  // todo add edit
  isEdit: false,
  todoId: null,
  todoContent: '',
  todoDueDate: null,
  todoType: '',
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // axios
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };

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

  const addUserToLocalStorage = ({ user, token, missions }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('missions', JSON.stringify(missions));
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('missions');
  };

  const registerUser = async ({ user }) => {
    dispatch({ type: USER_REGISTER_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/register', user);
      const { user: createdUser, token, missions } = response.data;
      addUserToLocalStorage({ user: createdUser, token, missions });
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
      dispatch({ type: USER_REGISTER_FAILED, payload: { msg } });
    }
    clearAlert();
  };

  const login = async ({ user }) => {
    dispatch({ type: USER_LOGIN_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/login', user);
      const { user: loginUser, token, missions } = response.data;
      addUserToLocalStorage({ user: loginUser, token, missions });
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

  const logoutUser = () => {
    removeUserFromLocalStorage();
    dispatch({ type: USER_LOGOUT });
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
      console.log(config);
      const response = await axios.patch(
        '/api/v1/create-goal',
        { goal, goalGenreId },
        config
      );
      const { user, token, missions } = response.data;
      addUserToLocalStorage({ user, token, missions });
      dispatch({ type: GOAL_CREATE_SUCCESS, payload: { user, missions } });
    } catch (error) {
      const { msg } = error.response.data;
      dispatch({ type: GOAL_CREATE_FAILED, payload: { msg } });
    }
    // clearAlert();
  };

  const updateChart = async ({ type, cont, pos, parentPos, goalId }) => {
    console.log('hello');
    dispatch({ type: REQUEST_BEGIN });
    try {
      switch (type) {
        case 'goal': {
          const res = await axios.patch(
            '/api/v1/update-goal',
            {
              goal: cont,
              goalGenreId: goalId,
            },
            config
          );
          const { user, token, missions } = res.data;
          dispatch({ type: GOAL_UPDATE_SUCCESS, payload: { user, missions } });
          addUserToLocalStorage({ user, token, missions });
          break;
        }
        case 'mission': {
          const res = await axios.patch(
            '/api/v1/update-mission',
            { content: cont, position: pos },
            config
          );
          const { updatedMission, posMissions } = res.data;
          const userMissions = JSON.parse(localStorage.getItem('missions'));
          userMissions[pos] = posMissions;
          userMissions[4][pos] = updatedMission;
          dispatch({
            type: MISSION_UPDATE_SUCCESS,
            payload: { missions: userMissions },
          });
          localStorage.setItem('missions', JSON.stringify(userMissions));
          break;
        }
        case 'sub-mission': {
          const res = await axios.patch(
            '/api/v1/update-sub-mission',
            {
              content: cont,
              position: pos,
              missionPosition: parentPos,
            },
            config
          );
          const { posMissions } = res.data;
          console.log(posMissions);
          const userMissions = JSON.parse(localStorage.getItem('missions'));
          userMissions[parentPos] = posMissions;
          dispatch({
            type: SUB_MISSION_UPDATE_SUCCESS,
            payload: { missions: userMissions },
          });
          localStorage.setItem('missions', JSON.stringify(userMissions));
          break;
        }
        default: {
          throw new Error('no such update type');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Todo
  const createTodo = async ({ content, dueDate, type }) => {
    dispatch({ type: REQUEST_BEGIN });
    try {
      const res = await axios.post(
        '/api/v1/create-todo',
        { content, dueDate, todoType: type },
        config
      );
      dispatch({ type: TODO_CREATE_SUCCESS });
    } catch (error) {
      const { msg } = error.response.data;
      dispatch({ type: TODO_CREATE_FAILED, payload: msg });
    }
    clearAlert();
  };

  const updateTodo = async ({ id, content, dueDate }) => {
    dispatch({ type: REQUEST_BEGIN });
    try {
      const res = await axios.patch(
        '/api/v1/update-todo',
        { id, content, dueDate },
        config
      );
      const { todo } = res.data;
      dispatch({ type: TODO_UPDATE_SUCCESS });
      return todo;
    } catch (error) {
      const { msg } = error.response;
      dispatch({ type: TODO_UPDATE_FAILED, payload: { msg } });
    }
    clearAlert();
  };

  const toggleEditTodo = ({ id, content, dueDate }) => {
    dispatch({
      type: TOGGLE_EDIT_TODO,
      payload: { id, content, dueDate },
    });
  };

  const cancelEditTodo = () => {
    dispatch({ type: CANCEL_EDIT_TODO });
  };

  const changeTodoState = ({ name, data }) => {
    dispatch({ type: CHANGE_TODO_STATE, payload: { name, data } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        login,
        logoutUser,
        openSidebarModal,
        closeSidebarModal,
        updateUser,
        createGoal,
        updateChart,
        createTodo,
        updateTodo,
        toggleEditTodo,
        cancelEditTodo,
        changeTodoState,
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
