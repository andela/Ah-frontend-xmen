import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import ActionTypes from '../ActionTypes';
import bookmarkListing from '../bookmarkListAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const token = localStorage.getItem('token');

describe('bookmark list fetch action', () => {
  afterEach(() => fetchMock.restore());

  it('dispatches BOOKMARK_LIST_FETCHED when bookmark listing is done', () => {
    const expectedAction = [{
      type: ActionTypes.BOOKMARK_LIST_FETCHED,
      payload: [{ title: '', slug: '' }],
    }];

    fetchMock.getOnce(`${BASE_URL}/bookmarks`, {
      bookmarks: [{ title: '', slug: '' }],
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      mode: 'cors',
    });
    const store = mockStore();
    return store.dispatch(bookmarkListing()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
