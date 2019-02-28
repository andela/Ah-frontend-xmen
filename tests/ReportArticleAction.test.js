import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import reportArticleAction from '../src/actions/articleActions/reportArticleAction';
import { BASE_URL } from '../src/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('report Article Action', () => {
  beforeEach(() => {
    fetchMock.restore();
    localStorage.clear();
  });
  it('tests report article', () => {
    localStorage.setItem('slug', 'slug1');
    fetchMock.postOnce(`${BASE_URL}/articles/slug1/report`, {
      body: {
        reason: 'it is not right',
      },
      headers: {
        'content-type': 'application/json',
      },
    });
    const expectedAction = [
      {
        payload: undefined,
        type: 'REPORT_ARTICLE_SUCCEEDS',
      },
    ];
    const store = mockStore({});
    return store.dispatch(reportArticleAction(
      {
        reason: 'not right',
      },
    )).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
