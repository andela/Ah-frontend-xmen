import {
  FACEBOOK_SIGNIN_FAIL,
  FACEBOOK_SIGNIN_SUCCESS,
  GOOGLE_SIGNIN_SUCCESS,
  GOOGLE_SIGNIN_FAIL,
} from '../../actions/ActionTypes';

const initialState = {
  isAuthenticated: false,
  facebook_login: false,
  google_login: false,
  payload: '',
  token: '',
};

const socialAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_SIGNIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        google_login: true,
        token: action.token,
        payload: action.payload,

      };
    case GOOGLE_SIGNIN_FAIL:
      return {
        ...state,
        payload: action.payload,
      };
    case FACEBOOK_SIGNIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        facebook_login: true,
        token: action.payload.user.token,
        payload: action.payload,
      };
    case FACEBOOK_SIGNIN_FAIL:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default socialAuthReducer;
