import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { EditArticle } from '../articleEditorActions';
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
const slug = 'shadow-4re8k';

describe('fetch, create, update and delete articles', () => {
  beforeEach(() => {
    fetchMock.restore();
    localStorage.clear();
  });
  it('tests update an article', () => {
    fetchMock.putOnce(`${BASE_URL}/articles/${slug}/`, {
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
        type: ActionTypes.EDIT_ARTICLE_SUCCESS,
        payload: {
          title: 'shadow',
          description: 'future',
          body: 'Future of all futures',
          tags: ['Andela'],
        },
      },
    ];
    const store = mockStore();
    return store.dispatch(EditArticle(slug, data)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('tests faliure to update an article', () => {
    fetchMock.putOnce(`${BASE_URL}/articles/${slug}/`, {
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
        type: ActionTypes.EDIT_ARTICLE_FALIURE,
        payload: {
          title: ['This field may not be blank'],
          description: ['This field may not be blank'],
          body: ['This field may not be blank'],
        },
      },
    ];
    const store = mockStore();
    return store.dispatch(EditArticle(slug, invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
