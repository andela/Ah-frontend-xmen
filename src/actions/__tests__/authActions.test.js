import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import ActionTypes from '../ActionTypes';
import { BASE_URL } from '../../constants';
import getAuthUserDetails from '../authAction';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('async actions for comments', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fetch user profile of currently logged in user successfully', () => {
    fetchMock.get(`${BASE_URL}/user`, {
      body: { username: 'aradomusername', email: 'arandomemail@g.com' },
      headers: { 'Content-Type': 'application/json' },

    });
    fetchMock.get(`${BASE_URL}/profiles/aradomusername`, {
      body: {
        profile: {
          username: 'aradomusername',
          email: 'arandomemail@g.com',
        },
      },
      headers: { 'Content-Type': 'application/json' },
    });
    const expectedAction = [{
      type: ActionTypes.AUTH_SUCCESS,
      payload: {
        profile: {
          username: 'aradomusername',
          email: 'arandomemail@g.com',
        },
      },
    }];
    const store = mockStore({});
    return store.dispatch(getAuthUserDetails()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should fetch dispatch AUTH FAIL on failure', () => {
    fetchMock.get(`${BASE_URL}/user`, {
      body: { username: 'aradomusername', email: 'arandomemail@g.com' },
      headers: { 'Content-Type': 'application/json' },

    });
    fetchMock.get(`${BASE_URL}/profiles/aradomusername`, {
      body: { errors: {} },
      headers: { 'Content-Type': 'application/json' },
    });
    const expectedAction = [{
      type: ActionTypes.AUTH_FAIL,
      payload: {},
    }];
    const store = mockStore({});
    return store.dispatch(getAuthUserDetails()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
