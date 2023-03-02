import {
  SHOW_ALERT,
  CLEAR_ALERT,
  USER_REGISTER_BEGIN,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
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
      };
    case USER_REGISTER_FAILED:
      return {
        ...state,
        isLoading: false
      }
    default:
      throw new Error('There is no such an action type');
  }
};

export default reducer;
