import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import ActionTypes from '../../ActionTypes';
import followersListAction from '../followerAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const username = localStorage.getItem('username');
const followersUrl = `${BASE_URL}/profiles/${username}/followers`;

describe('retrieve list of followers actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('handles successful retrieval of list of followers', () => {
    fetchMock.getOnce(followersUrl, {
      body: {
        profiles: [
          {
            username: 'khaleesi',
            first_name: 'daenerys',
            last_name: 'stormborne',
            bio: 'breaker of chains',
            image: null,
            is_following: false,
          }],
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.GET_FOLLOWERS_SUCCESS,
      payload: [
        {
          username: 'khaleesi',
          first_name: 'daenerys',
          last_name: 'stormborne',
          bio: 'breaker of chains',
          image: null,
          is_following: false,
        },
      ],
    }];

    const store = mockStore();

    return store.dispatch(followersListAction(username)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('handles error instances', () => {
    fetchMock.getOnce(followersUrl, {
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [];

    const store = mockStore();

    return store.dispatch(followersListAction(username)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
