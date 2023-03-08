import {
  SHOW_ALERT,
  CLEAR_ALERT,
  OPEN_SIDEBAR_MODAL,
  CLOSE_SIDEBAR_MODAL,
  USER_REGISTER_BEGIN,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
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
} from './action';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alertMessage: payload.msg,
        alertType: payload.type,
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertMessage: '',
        alertType: '',
      };
    case OPEN_SIDEBAR_MODAL:
      return {
        ...state,
        showSidebarModal: true,
      };
    case CLOSE_SIDEBAR_MODAL:
      return {
        ...state,
        showSidebarModal: false,
      };
    case REQUEST_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case USER_REGISTER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        token: payload.token,
        showAlert: true,
        alertMessage: payload.msg,
        alertType: 'success',
      };
    case USER_REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertMessage: payload.msg,
        alertType: 'failed',
      };
    case USER_LOGIN_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        token: payload.token,
        missions: payload.missions,
        showAlert: true,
        alertMessage: payload.msg,
        alertType: 'success',
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertMessage: payload.msg,
        alertType: 'failed',
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        missions: [],
        showAlert: true,
        alertMessage: 'Log out successful',
        alertType: 'success',
      };
    case USER_UPDATE_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertMessage: 'User updated successfully!',
        alertType: 'success',
        user: payload.user,
      };
    case USER_UPDATE_FAILED:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertMessage: payload.msg,
        alertType: 'failed',
      };
    case GOAL_CREATE_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    case GOAL_CREATE_FAILED:
      return {
        ...state,
        showAlert: true,
        alertMessage: payload.msg,
        alertType: 'failed',
      };
    default:
      throw new Error('There is no such an action type');
  }
};

export default reducer;
