import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import getSingleArticle from '../getSingleArticle';
import { ARTICLE_FETCH_NOT_FOUND, ARTICLE_FETCH_SUCCESSFUL } from '../../ActionTypes';

const mockStore = configureStore([thunk]);
const slug = 'slug-is-as12';
describe('getSingleArticle', () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it('should dispatch ARTICLE_FETCH_SUCCESSFUL action', () => {
    const expectedActions = [
      {
        type: ARTICLE_FETCH_SUCCESSFUL,
        payload: [],
      },
    ];
    fetchMock.getOnce(`https://ah-backend-xmen-staging.herokuapp.com/api/articles/${slug}/`,
      {
        body: {
          articles: [],
        },
        headers: {
          ContentType: 'application/json',
        },
        status: 200,
      });
    const store = mockStore();

    return store.dispatch(getSingleArticle(slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('should dispatch ARTICLE_FETCH_NOT_FOUND action', () => {
    const expectedActions = [
      {
        type: ARTICLE_FETCH_NOT_FOUND,
        payload: null,
      },
    ];
    fetchMock.getOnce(`https://ah-backend-xmen-staging.herokuapp.com/api/articles/${slug}/`,
      {
        body: {},
        status: 404,
        headers: { 'content-type': 'application/json' },
      });
    const store = mockStore();

    return store.dispatch(getSingleArticle(slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
