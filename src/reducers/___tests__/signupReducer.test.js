import ActionTypes from '../../actions/ActionTypes';
import signUpReducer from '../signupReducer';

const initialState = {
  message: '',
  errors: {},
  isSuccessful: false,
  token: '',
};

describe('signupReducer', () => {
  it('should return the correct state for register success', () => {
    const action = {
      type: ActionTypes.REGISTER_SUCCESS,
      payload: {
        message: 'welcome',
        token: '1234',
      },
    };
    const expectedState = {
      message: 'welcome',
      token: '1234',
      errors: {},
      isSuccessful: true,

    };
    expect(signUpReducer(initialState, action)).toEqual(expectedState);
  });
  it('should return the correct state for register failuire', () => {
    const action = {
      type: ActionTypes.REGISTER_FAILURE,
      payload: {
        username: 'error',
        email: 'error',
        password: 'error',
      },
    };
    const expectedState = {
      message: '',
      token: '',
      errors: {
        username: 'error',
        email: 'error',
        password: 'error',
      },
      isSuccessful: false,

    };
    expect(signUpReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return the initial state for invalid action', () => {
    const action = {
      type: 'INVALID_ACTION',
    };
    expect(signUpReducer(initialState, action)).toEqual(initialState);
  });
});
