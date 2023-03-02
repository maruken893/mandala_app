import { useReducer, createContext, useContext } from 'react';
import axios from 'axios';

import reducer from './reducer';
import {
  SHOW_ALERT,
  CLEAR_ALERT,
  USER_REGISTER_BEGIN,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
} from './action';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: '',
  alertType: '',
  // auth info
  user: null,
  token: '',
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

  const registerUser = async ({ user }) => {
    dispatch({ type: USER_REGISTER_BEGIN });
    let data;
    try {
      data = await axios.post('/api/v1/auth/register', user);
      const { user: createdUser, token } = data;
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: { user: createdUser, token },
      });
      displayAlert({
        msg: 'Account created successfully redirecting ...',
        type: 'success',
      });
    } catch (error) {
      const { msg } = error.response.data;
      dispatch({ type: USER_REGISTER_FAILED });
      displayAlert({ msg, type: 'failed' });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert, registerUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
