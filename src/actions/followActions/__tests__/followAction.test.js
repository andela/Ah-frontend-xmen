import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import followAction from '../followAction';
import ActionTypes from '../../ActionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const username = localStorage.getItem('username');
const followUrl = `${BASE_URL}/profiles/${username}/follow`;

describe('follow actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('handles successful follow', () => {
    fetchMock.postOnce(followUrl, {
      body: {
        profile: {
          message: 'You have followed me',
        },
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.FOLLOW_SUCCESS,
      payload: 'You have followed me',
    }];

    const store = mockStore();

    return store.dispatch(followAction(username)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('handles unsuccessful follow', () => {
    fetchMock.postOnce(followUrl, {
      body: {
        profile: {
          error: 'You already follow me',
        },
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.FOLLOW_FAIL,
      payload: 'You already follow me',
    }];


    const store = mockStore();

    return store.dispatch(followAction(username)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('catches error instances', () => {
    fetchMock.postOnce(followUrl, {
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [];

    const store = mockStore();

    return store.dispatch(followAction(username)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
