import ActionTypes, { PROFILES_FETCH_FAIL, PROFILES_FETCH_SUCCESS } from '../../actions/ActionTypes';
import profileListReducer from '../profileListReducer';


describe('followReducer', () => {
  const initialState = {
    profiles: [],
  };

  it('should handle PROFILE_FETCH_SUCCESS', () => {
    const successAction = {
      type: PROFILES_FETCH_SUCCESS,
      payload: [{
        username: 'khaleesi',
        first_name: 'daenerys',
        last_name: 'stormborne',
        bio: 'breaker of chains',
        image: null,
        is_following: true,
      }],
    };

    const successState = {
      profiles: [{
        username: 'khaleesi',
        first_name: 'daenerys',
        last_name: 'stormborne',
        bio: 'breaker of chains',
        image: null,
        is_following: true,
      }],
    };

    expect(profileListReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle PROFILE_FETCH_FAIL', () => {
    const successAction = {
      type: PROFILES_FETCH_FAIL,
      payload: [],
    };

    const successState = {
      profiles: [],
    };

    expect(profileListReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle GET_FOLLOWERS_SUCCESS', () => {
    const successAction = {
      type: ActionTypes.GET_FOLLOWERS_SUCCESS,
      payload: [{
        username: 'khaleesi',
        first_name: 'daenerys',
        last_name: 'stormborne',
        bio: 'breaker of chains',
        image: null,
        is_following: true,
      }],
    };

    const successState = {
      profiles: [{
        username: 'khaleesi',
        first_name: 'daenerys',
        last_name: 'stormborne',
        bio: 'breaker of chains',
        image: null,
        is_following: true,
      }],
    };

    expect(profileListReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle GET_FOLLOWERS_NONE', () => {
    const successAction = {
      type: ActionTypes.GET_FOLLOWERS_NONE,
      payload: [],
    };

    const successState = {
      profiles: [],
    };

    expect(profileListReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle GET_FOLLOWING_SUCCESS', () => {
    const successAction = {
      type: ActionTypes.GET_FOLLOWING_SUCCESS,
      payload: [{
        username: 'khaleesi',
        first_name: 'daenerys',
        last_name: 'stormborne',
        bio: 'breaker of chains',
        image: null,
        is_following: true,
      }],
    };

    const successState = {
      profiles: [{
        username: 'khaleesi',
        first_name: 'daenerys',
        last_name: 'stormborne',
        bio: 'breaker of chains',
        image: null,
        is_following: true,
      }],
    };

    expect(profileListReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle GET_FOLLOWING_NONE', () => {
    const successAction = {
      type: ActionTypes.GET_FOLLOWING_NONE,
      payload: [],
    };

    const successState = {
      profiles: [],
    };

    expect(profileListReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle unexpected action case', () => {
    const successAction = {};

    const successState = {
      profiles: [],
    };

    expect(profileListReducer(initialState, successAction)).toEqual(successState);
  });

  it('should return initial state', () => {
    expect(profileListReducer(undefined, {})).toEqual(initialState);
  });
});
