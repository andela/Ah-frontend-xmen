import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import ActionTypes from '../ActionTypes';
import passwordResetAction from '../PasswordResetAction';

const mockStore = configureStore([thunk]);

describe('password reset action creator', () => {
  const email = 'sample@email.com';
  beforeEach(() => {
    fetchMock.restore();
  });

  it('should dispatch success action', () => {
    const expectedActions = [{
      type: ActionTypes.PASSWORD_RESET_SUCCESS,
      payload: 'success message',
    }];
    fetchMock.postOnce('https://ah-backend-xmen-staging.herokuapp.com/api/users/password-reset/', {
      body: {
        user: {
          message: 'success message',
        },
      },

      headers: { 'content-type': 'application/json' },
    });
    const store = mockStore({});
    return store.dispatch(passwordResetAction(email)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch failure action', () => {
    const expectedActions = [{
      type: ActionTypes.PASSWORD_RESET_FAILED,
      payload: 'error message',
    }];
    fetchMock.postOnce('https://ah-backend-xmen-staging.herokuapp.com/api/users/password-reset/', {
      body: { errors: ['error message'] },
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
    const store = mockStore({});
    return store.dispatch(passwordResetAction(email)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
