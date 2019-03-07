import ActionTypes from '../../actions/ActionTypes';
import followReducer from '../followReducer';


describe('followReducer', () => {
  const initialState = {
    profile: {},
    isFollowing: undefined,
  };

  it('should handle FOLLOW_SUCCESS', () => {
    const successAction = {
      type: ActionTypes.FOLLOW_SUCCESS,
      payload: 'You have followed me',
    };

    const successState = {
      profile: { message: 'You have followed me' },
      isFollowing: true,
    };

    expect(followReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle FOLLOW_FAIL', () => {
    const successAction = {
      type: ActionTypes.FOLLOW_FAIL,
      payload: 'You cannot follow yourself',
    };

    const successState = {
      profile: 'You cannot follow yourself',
      isFollowing: undefined,
    };

    expect(followReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle UNFOLLOW_SUCCESS', () => {
    const successAction = {
      type: ActionTypes.UNFOLLOW_SUCCESS,
      payload: 'You have unfollowed me',
    };

    const successState = {
      profile: { message: 'You have unfollowed me' },
      isFollowing: false,
    };

    expect(followReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle UNFOLLOW_FAIL', () => {
    const successAction = {
      type: ActionTypes.UNFOLLOW_FAIL,
      payload: 'You do not follow me',
    };

    const successState = {
      profile: 'You do not follow me',
      isFollowing: undefined,
    };

    expect(followReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle unexpected action case', () => {
    const successAction = {};

    const successState = {
      profile: {},
      isFollowing: undefined,
    };

    expect(followReducer(initialState, successAction)).toEqual(successState);
  });

  it('should return initial state', () => {
    expect(followReducer(undefined, {})).toEqual(initialState);
  });
});
