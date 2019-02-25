import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import editProfile from '../src/actions/EditProfileAction';
import { BASE_URL } from '../src/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('edit profile action', () => {
  beforeEach(() => {
    fetchMock.restore();
    localStorage.clear();
  });
  it('tests edit profile', () => {
    localStorage.setItem('username', 'user1');
    fetchMock.putOnce(`${BASE_URL}/profiles/user1/edit`, {
      body: {
        profile: {
          first_name: 'user',
          last_name: 'user2',
          bio: 'hello',
        },
      },
      headers: {
        'content-type': 'application/json',
      },
    });
    const expectedAction = [
      {
        type: 'EDIT_PROFILE_BEGIN',
      },
      {
        payload:
            { bio: 'hello', first_name: 'user', last_name: 'user2' },
        type: 'EDIT_PROFILE_SUCCEEDS',
      },
    ];
    const store = mockStore({});
    return store.dispatch(editProfile(
      {
        first_name: 'user',
        last_name: 'user2',
        bio: 'hello',
      },
    )).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
