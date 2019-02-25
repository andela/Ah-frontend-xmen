import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { toast } from 'react-toastify';
import likeDislikeArticleAction from '../LikeDislikeArticleAction';

import { ARTICLE_DISLIKE_SUCCESSFUL, ARTICLE_LIKE_SUCCESSFUL, ARTICLE_LIKE_FAILURE } from '../../ActionTypes';

const mockStore = configureStore([thunk]);
const slug = 'dummy-aslg';
const { BASE_URL } = process.env;
const token = 'my.token.123';

describe('likeDislikeAcrticleAction', () => {
  beforeEach(() => {
    fetchMock.restore();
  });
  it('should dispatch correct actions on button like', () => {
    localStorage.setItem('token', token);
    fetchMock.putOnce(`${BASE_URL}/articles/${slug}/likes/`,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,

        },
        body: { like_article: 'you have liked an article' },
        status: 201,
      });

    const expectedActions = [{
      type: ARTICLE_LIKE_SUCCESSFUL,
      payload: true,
    }];
    const store = mockStore({});
    store.dispatch(likeDislikeArticleAction(slug, true, true)).then(
      () => {
        expect(store.getActions()).toEqual(expectedActions);
      },
    );
  });


  it('should dispatch correct actions on button dislike', () => {
    localStorage.setItem('token', token);
    fetchMock.putOnce(`${BASE_URL}/articles/${slug}/likes/`,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,

        },
        body: { like_article: 'you have disliked an article' },
        status: 201,
      });

    const expectedActions = [{
      type: ARTICLE_DISLIKE_SUCCESSFUL,
      payload: true,
    }];
    const store = mockStore({});
    store.dispatch(likeDislikeArticleAction(slug, true, false)).then(
      () => {
        expect(store.getActions()).toEqual(expectedActions);
      },
    );
  });


  it('should dispatch correct actions on ivalid token', () => {
    localStorage.setItem('token', token);
    fetchMock.putOnce(`${BASE_URL}/articles/${slug}/likes/`,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,

        },
        body: { like_article: 'you have disliked an article' },
        status: 403,
      });

    const expectedActions = [{
      type: ARTICLE_LIKE_FAILURE,
      payload: { like: 'please log in first' },
    }];
    toast.error = jest.fn();
    const store = mockStore({});
    store.dispatch(likeDislikeArticleAction(slug, true, true)).then(
      () => {
        expect(store.getActions()).toEqual(expectedActions);
      },
    );
  });
});
