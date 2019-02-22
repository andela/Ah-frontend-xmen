import ActionTypes from '../actions/ActionTypes';

const initialState = {
  message: '',
  errors: {},
  isSuccessful: false,
  token: '',
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state, token: action.payload.token, isSuccessful: true, message: action.payload.message,
      };
    case ActionTypes.REGISTER_FAILURE:
      return {
        ...state, errors: { ...action.payload }, isSuccessful: false,
      };

    default:
      return { ...state };
  }
};

export default signUpReducer;
