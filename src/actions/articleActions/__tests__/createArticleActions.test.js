import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { CreateArticle } from '../articleEditorActions';
import ActionTypes from '../../ActionTypes';


const middlewarse = [thunk];
const mockStore = configureStore(middlewarse);

const { BASE_URL } = process.env;
const data = {
  title: 'shadow',
  description: 'future',
  body: 'Future of all futures',
  tags: ['Andela'],
};
const invalidData = {
  title: '',
  description: '',
  body: '',
  tags: [],
};

describe('fetch, create, update and delete articles', () => {
  beforeEach(() => {
    fetchMock.restore();
    localStorage.clear();
  });
  it('tests create an article', () => {
    fetchMock.postOnce(`${BASE_URL}/articles/`, {
      body: {
        articles: {
          title: 'shadow',
          description: 'future',
          body: 'Future of all futures',
          tags: ['Andela'],
        },
      },
      headers: {
        'content-type': 'application/json',
      },
    });
    const expectedAction = [
      {
        type: ActionTypes.CREATE_ARTICLE_SUCCESS,
        payload: {
          title: 'shadow',
          description: 'future',
          body: 'Future of all futures',
          tags: ['Andela'],
        },
      },
    ];
    const store = mockStore();
    return store.dispatch(CreateArticle(data)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('tests faliure to create an article', () => {
    fetchMock.postOnce(`${BASE_URL}/articles/`, {
      body: {
        articles: {
          errors: {
            title: ['This field may not be blank'],
            description: ['This field may not be blank'],
            body: ['This field may not be blank'],
          },
        },
      },
      headers: {
        'content-type': 'application/json',
      },
    });
    const expectedAction = [
      {
        type: ActionTypes.CREATE_ARTICLE_FALIURE,
        payload: {
          title: ['This field may not be blank'],
          description: ['This field may not be blank'],
          body: ['This field may not be blank'],
        },
      },
    ];
    const store = mockStore();
    return store.dispatch(CreateArticle(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
