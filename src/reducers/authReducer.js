import ActionTypes from '../actions/ActionTypes';

const initialState = {
  IsAuth: false,
  username: '',
  image: '',
  first_name: '',
  last_name: '',

};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        IsAuth: true,
        username: action.payload.profile.username,
        image: action.payload.profile.image,
        first_name: action.payload.profile.first_name,
        last_name: action.payload.profile.last_name,

      };
    case ActionTypes.AUTH_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
