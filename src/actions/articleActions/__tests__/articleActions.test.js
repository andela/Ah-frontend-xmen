import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import fetchArticlesAction from '../fetchArticlesAction';
import actionsTypes from '../../ActionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const { BASE_URL } = process.env;

describe('fetch async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('it should fetch all articles', () => {
    fetchMock.getOnce(
      `${BASE_URL}/articles/?limit=6&page=1`,
      {
        headers: { 'content-type': 'application/json' },
        body: {
          articles: [],
        },
      },
    );
    const store = mockStore({});
    const expectedActions = [
      {
        type: actionsTypes.FETCH_ARTICLES_SUCCESS,
        payload: [],
      },
    ];
    return store.dispatch(fetchArticlesAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
