import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import ActionTypes from '../../ActionTypes';
import unfollowAction from '../unfollowAction';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const username = localStorage.getItem('username');
const unfollowUrl = `${BASE_URL}/profiles/${username}/follow`;

describe('unfollow actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('handles successful unfollow', () => {
    fetchMock.deleteOnce(unfollowUrl, {
      body: {
        profile: {
          message: 'You have unfollowed me',
        },
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.UNFOLLOW_SUCCESS,
      payload: 'You have unfollowed me',
    }];

    const store = mockStore();

    return store.dispatch(unfollowAction(username)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('handles unsuccessful unfollow', () => {
    fetchMock.deleteOnce(unfollowUrl, {
      body: {
        profile: {
          error: 'You do not follow me',
        },
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.UNFOLLOW_FAIL,
      payload: 'You do not follow me',
    }];


    const store = mockStore();

    return store.dispatch(unfollowAction(username)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('catches error instances', () => {
    fetchMock.deleteOnce(unfollowUrl, {
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [];

    const store = mockStore();

    return store.dispatch(unfollowAction(username)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
