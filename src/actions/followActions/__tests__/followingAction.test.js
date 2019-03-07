import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import ActionTypes from '../../ActionTypes';
import followingListAction from '../followingAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const username = localStorage.getItem('username');
const followingUrl = `${BASE_URL}/profiles/${username}/following`;

describe('retrieve list of following actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('handles successful retrieval of list of following', () => {
    fetchMock.getOnce(followingUrl, {
      body: {
        profiles: [
          {
            username: 'khaleesi',
            first_name: 'daenerys',
            last_name: 'stormborne',
            bio: 'breaker of chains',
            image: null,
            is_following: true,
          }],
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.GET_FOLLOWING_SUCCESS,
      payload: [
        {
          username: 'khaleesi',
          first_name: 'daenerys',
          last_name: 'stormborne',
          bio: 'breaker of chains',
          image: null,
          is_following: true,
        },
      ],
    }];

    const store = mockStore();

    return store.dispatch(followingListAction(username)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('handles error instances', () => {
    fetchMock.getOnce(followingUrl, {
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [];

    const store = mockStore();

    return store.dispatch(followingListAction(username)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
