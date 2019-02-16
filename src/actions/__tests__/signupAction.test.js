import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import registerUser from '../signupAction';
import ActionTypes from '../ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const validData = {
  username: 'sdsdserefefefefe',
  email: 'maildedd@yahoo.com',
  password: 'Password123',
};

describe('signup actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates REGISTER_SUCCESS when registerUser is done', () => {
    const expectedAction = [{
      type: ActionTypes.REGISTER_SUCCESS,
      payload: {
        message: 'welcome',
        token: '1234',
      },
    }];

    fetchMock.postOnce(`${BASE_URL}/users/`, {
      user: {
        Info: {
          token: '1234',
        },
        message: 'welcome',
      },

      status: 201,
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    });
    const store = mockStore();

    return store.dispatch(registerUser(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('creates REGISTER_FAILURE when registerUser is done', () => {
    const expectedAction = [{
      type: ActionTypes.REGISTER_FAILURE,
      payload: {
        errors: {},
      },
    }];

    fetchMock.postOnce(`${BASE_URL}/users/`, {
      errors: {
        errors: {},
      },

      status: 400,
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    });
    const store = mockStore();

    return store.dispatch(registerUser(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
