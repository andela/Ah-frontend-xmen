import ActionTypes from '../actions/ActionTypes';

const initialState = {
  profile: {},
  isFollowing: undefined,
};

const followReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FOLLOW_SUCCESS:
      return {
        ...state,
        isFollowing: true,
        profile: { message: action.payload },
      };
    case ActionTypes.FOLLOW_FAIL:
      return {
        ...state,
        profile: action.payload,
      };
    case ActionTypes.UNFOLLOW_SUCCESS:
      return {
        ...state,
        isFollowing: false,
        profile: { message: action.payload },
      };
    case ActionTypes.UNFOLLOW_FAIL:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default followReducer;
