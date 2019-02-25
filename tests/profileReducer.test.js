
import profileReducer from '../src/reducers/profileReducer';
import * as actions from '../src/actions/ActionTypes';


const initialState = {};
describe('Profile Reducer', () => {
  it('should return initial state', () => {
    expect(profileReducer(initialState, {})).toEqual(initialState);
  });
  it('should handle EDIT_PROFILE_SUCCEEDS', () => {
    const action = {
      type: actions.EDIT_PROFILE_SUCCEEDS,
      payload: 'text',
    };
    expect(profileReducer(initialState, action)).toEqual({
      loading: false,
      profile: 'text',
    });
  });
  it('should handle GET_PROFILE_SUCCEEDS', () => {
    const action = {
      type: actions.GET_PROFILE_SUCCEEDS,
      payload: {
        profile: 'text',
      },
    };
    expect(profileReducer(initialState, action)).toEqual({
      loading: false,
      profile: 'text',
    });
  });
  it('should handle GET_PROFILE_BEGIN', () => {
    const action = {
      type: actions.GET_PROFILE_BEGIN,
    };
    expect(profileReducer(initialState, action)).toEqual({
      loading: true,
      error: null,
    });
  });
  it('should handle EDIT_PROFILE_FAILS', () => {
    const action = {
      type: actions.EDIT_PROFILE_FAILS,
      payload: {
        error: 'text',
      },
    };
    expect(profileReducer(initialState, action)).toEqual({
      loading: false,
      error: 'text',
      profile: [],
    });
  });
  it('should handle GET_PROFILE_FAIL', () => {
    const action = {
      type: actions.GET_PROFILE_FAIL,
      payload: {
        error: 'text',
      },
    };
    expect(profileReducer(initialState, action)).toEqual({
      loading: false,
      error: 'text',
      profile: [],
    });
  });
  it('should handle EDIT_PROFILE_BEGIN', () => {
    const action = {
      type: actions.EDIT_PROFILE_BEGIN,
    };
    expect(profileReducer(initialState, action)).toEqual({
      loading: true,
      error: null,
    });
  });
});
