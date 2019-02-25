import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import loginAction from '../loginAction';
import { LOGIN_FAIL, LOGIN_SUCCESS } from '../../ActionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const loginUrl = `${BASE_URL}/users/login/`;

describe('login actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('handles LOGIN_SUCCESS action after logging in', () => {
    fetchMock.postOnce(loginUrl, {
      body: { token: 'token string' },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: LOGIN_SUCCESS,
      payload: 'token string',
    }];

    const validData = {
      email: 'user@user.com',
      password: 'N0vember',
    };

    const store = mockStore();

    return store.dispatch(loginAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('handles LOGIN_FAIL action after logging in', () => {
    fetchMock.postOnce(loginUrl, {
      body: { errors: {} },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: LOGIN_FAIL,
      payload: {},
    }];

    const invalidData = {
      email: '',
      password: '',
    };

    const store = mockStore();

    return store.dispatch(loginAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('catches error instances', () => {
    fetchMock.postOnce(loginUrl, {
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [];

    const validData = {
      email: 'user@user.com',
      password: 'N0vember',
    };

    const store = mockStore();

    return store.dispatch(loginAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
