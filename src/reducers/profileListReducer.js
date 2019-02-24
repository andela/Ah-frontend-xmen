
import ActionTypes, { PROFILES_FETCH_FAIL, PROFILES_FETCH_SUCCESS } from '../actions/ActionTypes';

const initialState = {
  profiles: [],
};

const profileListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILES_FETCH_SUCCESS:
      return {
        ...state,
        profiles: action.payload,
      };
    case PROFILES_FETCH_FAIL:
      return {
        ...state,
        profiles: action.payload,
      };
    case ActionTypes.GET_FOLLOWERS_SUCCESS:
      return {
        ...state,
        profiles: action.payload,
      };
    case ActionTypes.GET_FOLLOWERS_NONE:
      return {
        ...state,
        profiles: action.payload,
      };
    case ActionTypes.GET_FOLLOWING_SUCCESS:
      return {
        ...state,
        profiles: action.payload,
      };
    case ActionTypes.GET_FOLLOWING_NONE:
      return {
        ...state,
        profiles: action.payload,
      };
    default:
      return state;
  }
};

export default profileListReducer;
