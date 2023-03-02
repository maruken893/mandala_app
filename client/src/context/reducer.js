import { SHOW_ALERT, CLEAR_ALERT } from './action';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alertMessage: payload.msg,
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertMessage: '',
      };
    default:
      throw new Error('There is no such an action type')
  }
};

export default reducer;
