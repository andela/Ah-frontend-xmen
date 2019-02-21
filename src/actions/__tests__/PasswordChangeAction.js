import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import ActionTypes from '../ActionTypes';
import passwordChangeAction from '../PasswordChangeAction';

const mockStore = configureStore([thunk]);

describe('password change action creator', () => {
  const newPassword = 'StrongPassword1';
  const token = 'this.is.token';

  beforeEach(() => {
    fetchMock.restore();
  });

  it('should dispatch success action', () => {
    const expectedActions = [{
      type: ActionTypes.PASSWORD_RESET_SUCCESS,
      payload: 'success message',
    }];
    fetchMock.putOnce(`https://ah-backend-xmen-staging.herokuapp.com/api/users/password-reset/${token}/`, {
      body: {
        user: {
          'password-reset': 'success message',
        },
      },
      headers: { 'content-type': 'application/json' },
    });
    const store = mockStore({});
    return store.dispatch(passwordChangeAction(newPassword, token)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch failure action', () => {
    const expectedActions = [{
      type: ActionTypes.PASSWORD_RESET_FAILED,
      payload: 'error message',
    }];
    fetchMock.putOnce(`https://ah-backend-xmen-staging.herokuapp.com/api/users/password-reset/${token}/`, {
      body: { errors: { error: ['error message'] } },
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
    const store = mockStore({});
    return store.dispatch(passwordChangeAction(newPassword, token)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
