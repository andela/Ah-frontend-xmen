import socialAuthReducer from '../socialAuthReducer';
import {
  GOOGLE_SIGNIN_SUCCESS, GOOGLE_SIGNIN_FAIL,
  FACEBOOK_SIGNIN_SUCCESS,
  FACEBOOK_SIGNIN_FAIL,
} from '../../../actions/ActionTypes';


describe('Social Auth Reducer', () => {
  it('should return the initial state', () => {
    expect(socialAuthReducer(undefined, {})).toEqual(
      {
        isAuthenticated: false,
        facebook_login: false,
        google_login: false,
        payload: '',
        token: '',
      },
    );
  });

  it('should update state if GOOGLE LOGIN SUCCESS', () => {
    expect(socialAuthReducer([], { type: GOOGLE_SIGNIN_SUCCESS, payload: '' })).toEqual({
      google_login: true,
      isAuthenticated: true,
      payload: '',
      token: undefined,
    });
  });

  it('should update state if GOOGLE LOGIN FAILS', () => {
    expect(socialAuthReducer([], { type: GOOGLE_SIGNIN_FAIL, payload: '' })).toEqual({
      payload: '',
    });
  });

  it('should update state if FACEBOOKLOGIN SUCCESS', () => {
    expect(socialAuthReducer([], {
      type: FACEBOOK_SIGNIN_SUCCESS,
      payload: {
        user: {
          token: 'atoken',
        },
      },
    })).toEqual({
      facebook_login: true,
      isAuthenticated: true,
      payload: {
        user: {
          token: 'atoken',
        },
      },
      token: 'atoken',
    });
  });

  it('should update state if FACEBOOKLOGIN FAILs', () => {
    expect(socialAuthReducer([], { type: FACEBOOK_SIGNIN_FAIL, payload: '' })).toEqual({
      payload: '',
    });
  });
});
