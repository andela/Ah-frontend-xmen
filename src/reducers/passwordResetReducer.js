import ActionTypes from '../actions/ActionTypes';


const passwordResetReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.PASSWORD_RESET_FAILED:
      return {
        ...state,
        errors: action.payload,
      };
    case ActionTypes.PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default passwordResetReducer;
