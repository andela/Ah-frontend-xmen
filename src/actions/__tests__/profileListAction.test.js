import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { PROFILES_FETCH_SUCCESS } from '../ActionTypes';
import profileListAction from '../profileListAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const profilesUrl = `${BASE_URL}/profiles`;

describe('retrieve list of profiles actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('handles successful retrieval of all profiles', () => {
    fetchMock.getOnce(profilesUrl, {
      headers: { 'content-type': 'application/json' },
      body: {
        profiles: [{
          username: 'khaleesi',
          first_name: 'daenerys',
          last_name: 'stormborne',
          bio: 'breaker of chains',
          image: null,
          is_following: true,
        }],
      },
    });

    const expectedAction = [{
      type: PROFILES_FETCH_SUCCESS,
      payload: [{
        username: 'khaleesi',
        first_name: 'daenerys',
        last_name: 'stormborne',
        bio: 'breaker of chains',
        image: null,
        is_following: true,
      }],
    }];

    const store = mockStore();
    return store.dispatch(profileListAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('handles error instances', () => {
    fetchMock.getOnce(profilesUrl, {
      headers: { 'content-type': 'application/json' },
      body: undefined,
    });

    const expectedAction = [];

    const store = mockStore();
    return store.dispatch(profileListAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
