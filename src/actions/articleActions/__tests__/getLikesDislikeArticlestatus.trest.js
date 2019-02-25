import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { ARTICLE_FETCH_LIKES_SUCCESSFUL, ARTICLE_LIKE_FAILURE } from '../../ActionTypes';
import getLikeDislikeArticleStatus from '../getLikeDislikeArticleStatus';

const mockStore = configureStore([thunk]);
const slug = 'dummy-aslg';
const { BASE_URL } = process.env;
const token = 'my.token.123';


describe('likesdislikes article status', () => {
  beforeEach(() => {
    fetchMock.restore();
  });
  it('should dispatch correct actions on fetch artlicle likes', () => {
    localStorage.setItem('token', token);
    fetchMock.getOnce(`${BASE_URL}/articles/${slug}/likes/`,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: {
          articles: {
            likes: [],
            dislikes: [],
          },
        },
        status: 200,
      });

    const expectedActions = [{
      type: ARTICLE_FETCH_LIKES_SUCCESSFUL,
      payload: {
        liked: false,
        disliked: false,
        likesCount: 0,
        dislikesCount: 0,
      },
    }];
    const store = mockStore({});
    store.dispatch(getLikeDislikeArticleStatus(slug)).then(
      () => {
        expect(store.getActions()).toEqual(expectedActions);
      },
    );
  });


  it('should dispatch correct actions on fetch artlicle likes fails', () => {
    localStorage.setItem('token', token);
    fetchMock.getOnce(`${BASE_URL}/articles/${slug}/likes/`,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: {
          articles: {
            detail: 'please login first',
          },
        },
        status: 403,
      });

    const expectedActions = [{
      type: ARTICLE_LIKE_FAILURE,
      payload: 'please login first',
    }];
    const store = mockStore({});
    store.dispatch(getLikeDislikeArticleStatus(slug)).then(
      () => {
        expect(store.getActions()).toEqual(expectedActions);
      },
    );
  });
});
