import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { BASE_URL } from '../../../constants';
import googleSignIn from '../googleAction';
import facebookLoginAction from '../facebookAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatch actions for google login', () => {
    fetchMock.post(`${BASE_URL}/users/google-login/`, { auth_token: 'token' });
    const store = mockStore({});
    store.dispatch(googleSignIn({ auth_token: 'token' }));
    expect(store.getActions()).toEqual([]);
  });

  it('dispatch actions for facebook login', () => {
    fetchMock.post(`${BASE_URL}/users/facebook-login/`, { auth_token: 'token' });
    const store = mockStore({});
    store.dispatch(facebookLoginAction({ auth_token: 'token' }));
    expect(store.getActions()).toEqual([]);
  });
});
