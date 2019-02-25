import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as ActionTypes from '../src/actions/ActionTypes';
import fetchProfile from '../src/actions/ProfileActions';
import { BASE_URL } from '../src/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const username = localStorage.getItem('username');

describe('get Profile action', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  it('should create an action to request for profile', () => {
    const expectedAction = (fetchProfile);
    expect(fetchProfile).toEqual(expectedAction);
  });
  it('should fetch profile successfully', () => {
    const url = `${BASE_URL}/profiles/${username}`;
    fetchMock.getOnce(url, {
      body: {
        profile: [{
          username: 'maria',
          first_name: 'maria',
          last_name: 'nanfuka',
          bio: 'All about me',
        }],
      },
      headers: {
        'content-type': 'application/json',
      },
    });
    const expectedAction = [
      { type: ActionTypes.GET_PROFILE_BEGIN },
      {
        payload: {
          profile: [
            {
              bio: 'All about me',
              first_name: 'maria',
              last_name: 'nanfuka',
              username: 'maria',
            }],
        },
        type: ActionTypes.GET_PROFILE_SUCCEEDS,
      },
    ];

    return store
      .dispatch(fetchProfile())
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });
});
