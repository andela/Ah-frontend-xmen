import { LOGIN_SUCCESS, LOGIN_FAIL } from '../../actions/ActionTypes';
import loginReducer from '../loginReducer';


describe('loginReducer', () => {
  const initialState = {
    isSuccessful: false,
    token: '',
    errors: null,
  };

  it('should handle LOGIN_SUCCESS', () => {
    const successAction = {
      type: LOGIN_SUCCESS,
      payload: '123456',
    };

    const successState = {
      isSuccessful: true,
      token: '123456',
      errors: null,
    };

    expect(loginReducer(initialState, successAction)).toEqual(successState);
  });
  it('should handle LOGIN_FAIL', () => {
    const failAction = {
      type: LOGIN_FAIL,
      payload: {},
    };

    const failState = {
      isSuccessful: false,
      token: '',
      errors: {},
    };
    expect(loginReducer(initialState, failAction)).toEqual(failState);
  });
  it('should return the initial state', () => {
    const undefinedAction = {
      type: '',
      payload: {},
    };

    expect(loginReducer(initialState, undefinedAction)).toEqual(initialState);
  });
});
