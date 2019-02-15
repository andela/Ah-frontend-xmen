import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  profile: [],
  loading: false,
  error: null,
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.GET_PROFILE_SUCCEEDS:
      return {
        ...state,
        loading: false,
        profile: action.payload.profile,
      };
    case ActionTypes.GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        profile: [],
      };
    case ActionTypes.EDIT_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.EDIT_PROFILE_FAILS:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        profile: [],
      };
    case ActionTypes.EDIT_PROFILE_SUCCEEDS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    default:
      return state;
  }
}
