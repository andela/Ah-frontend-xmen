import authReducer from '../authReducer';
import ActionTypes from '../../actions/ActionTypes';

describe('Auth Reducer', () => {
  it('should initial state', () => {
    expect(authReducer(undefined, {})).toEqual({
      IsAuth: false,
      username: '',
      image: '',
      first_name: '',
      last_name: '',
    });
  });

  it('should handle AUTH SUCCESS', () => {
    expect(authReducer(undefined, {
      type: ActionTypes.AUTH_SUCCESS,
      payload: {
        profile: {},
      },
    })).toEqual({
      IsAuth: true,
      username: undefined,
      image: undefined,
      first_name: undefined,
      last_name: undefined,
    });
  });

  it('should handle AUTH FAIL', () => {
    expect(authReducer(undefined, {
      type: ActionTypes.AUTH_FAIL,
      payload: undefined,
    })).toEqual({
      errors: undefined,
      IsAuth: false,
      username: '',
      image: '',
      first_name: '',
      last_name: '',

    });
  });
});
