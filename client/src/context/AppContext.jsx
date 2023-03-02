import { useReducer, createContext, useContext } from 'react';

import reducer from './reducer';
import { SHOW_ALERT, CLEAR_ALERT } from './action';

const initialState = {
  isLoading: false,
  showAlert: true,
  alertMessage: 'test',
  alertType: 'success',
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const clearAlert = () => {
  //   setTimeout(() => {
  //     dispatch({ type: CLEAR_ALERT });
  //   }, 3500);
  // };

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
