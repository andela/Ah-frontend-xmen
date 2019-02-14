import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { DeleteArticle } from '../articleEditorActions';
import ActionTypes from '../../ActionTypes';


const middlewarse = [thunk];
const mockStore = configureStore(middlewarse);

const { BASE_URL } = process.env;
const slug = 'shadow-4re8k';

describe('fetch, create, update and delete articles', () => {
  beforeEach(() => {
    fetchMock.restore();
    localStorage.clear();
  });
  it('tests delete an article', () => {
    fetchMock.deleteOnce(`${BASE_URL}/articles/${slug}/`, {
      body: {
        articles: {
          message: 'Article successfully deleted',
        },
      },
      headers: {
        'content-type': 'application/json',
      },
    });
    const expectedAction = [
      {
        type: ActionTypes.DELETE_ARTICLE_SUCCESS,
        payload: 'Article successfully deleted',
      },
    ];
    const store = mockStore();
    return store.dispatch(DeleteArticle(slug)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
