import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import ActionTypes from '../ActionTypes';
import bookmarkArticle from '../articleActions/bookmarkArticle';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const token = localStorage.getItem('token');
const slug = 'swwswsw-233-sdd';

describe('bookmark actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates BOOKMARK_SUCCESS when bookmarkArticle is done', () => {
    const expectedAction = [{
      type: ActionTypes.BOOKMARK_SUCCESS,
      message: 'added to bookmarks',
    }];

    fetchMock.postOnce(`${BASE_URL}/articles/${slug}/bookmark`, {
      bookmarks: {
        message: 'added to bookmarks',
      },
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      mode: 'cors',
    });
    const store = mockStore();
    return store.dispatch(bookmarkArticle(slug, false)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
