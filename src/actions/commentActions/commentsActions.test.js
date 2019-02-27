import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import ActionTypes from '../ActionTypes';
import { BASE_URL } from '../../constants';
import getCommentsAction, { postCommentAction, UpdateCommentAction, deleteCommentAction } from './commentActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('async actions for comments', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch GET COMMENTS SUCCESS ', () => {
    fetchMock.getOnce(`${BASE_URL}/articles/andela-now-qwpmf/comments/`, {
      body: { comments: [{}], commentCount: 0 },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.GET_COMMENTS_SUCCESS,
      payload: { comments: [{}], commentCount: 0 },
    }];
    const store = mockStore({ payload: [] });

    return store.dispatch(getCommentsAction({ articleSlug: 'andela-now-qwpmf' })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('should dispatch GET COMMENTS FAIL ', () => {
    // let articleSlug='random-qq'
    fetchMock.getOnce(`${BASE_URL}/articles/andela-now-qwpmf/comments/`, {
      body: { errors: {} },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.GET_COMMENTS_FAIL,
      payload: { errors: {} },
    }];
    const store = mockStore({ payload: [] });

    return store.dispatch(getCommentsAction({ articleSlug: 'andela-now-qwpmf' })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should dispatch CREATE COMMENT SUCCESS', () => {
    const payload = {
      articleSlug: 'random-qq',
      payload: {
        body: 'body',
      },
    };
    fetchMock.postOnce(`${BASE_URL}/articles/${payload.articleSlug}/comments/`, {
      body: {
        comment: { body: 'body' },
      },
      headers: { 'content-type': 'application/json' },

    });
    const expectedAction = [{
      type: ActionTypes.CREATE_COMMENT_SUCCESS,
      payload: { comment: { body: 'body' } },
    }];
    const store = mockStore({ payload: [] });

    return store.dispatch(postCommentAction(payload)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should dispatch CREATE COMMENT FAIL', () => {
    const payload = {
      articleSlug: 'random-qq',
      payload: {
        body: 122,
      },
    };
    fetchMock.postOnce(`${BASE_URL}/articles/${payload.articleSlug}/comments/`, {
      body: {
        errors: {},
      },
      headers: { 'content-type': 'application/json' },

    });
    const expectedAction = [{
      type: ActionTypes.CREATE_COMMENT_FAIL,
      payload: { errors: {} },
    }];
    const store = mockStore({ payload: [] });

    return store.dispatch(postCommentAction(payload)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('dispatch UPDATE COMMENT FAIL', () => {
    const payload = {
      articleSlug: 'random-qq',
      payload: {
        body: 'update boody',
      },
    };
    fetchMock.putOnce(`${BASE_URL}/articles/${payload.articleSlug}/comments/1/`, {
      body: {
        errors: { body: '' },
      },
      headers: { 'content-type': 'application/json' },

    });
    const store = mockStore({ payload: [] });

    return store.dispatch(UpdateCommentAction({
      articleSlug: 'random-qq',
      commentId: 1,
      body: '',
    })).then(
      expect(store.getActions()).toEqual([]),
    );
  });

  it('dispatch UPDATE COMMENT SUCCESS', () => {
    const payload = {
      articleSlug: 'random-qq',
      payload: {
        body: 'update boody',
      },
    };
    fetchMock.putOnce(`${BASE_URL}/articles/${payload.articleSlug}/comments/1/`, {
      body: { data: {} },
      headers: { 'content-type': 'application/json' },
    });

    const store = mockStore({ payload: [] });
    return store.dispatch(UpdateCommentAction({
      articleSlug: 'random-qq',
      commentId: 1,
      body: 'an update',
    })).then(
      expect(store.getActions()).toEqual([]),
    );
  });

  it('should dispatch DELETE COMMENT SUCCESS', () => {
    const payload = {
      articleSlug: 'random-qq',
      commentId: 1,
    };

    fetchMock.delete(`${BASE_URL}/articles/${payload.articleSlug}/comments/${payload.commentId}/`, {
      body: {
        message: 'comment deleted successfully',
      },
      headers: { 'content-type': 'application/json' },
    });
    const store = mockStore({ payload: [] });
    const expectedActions = [{
      type: ActionTypes.DELETE_COMMENT_SUCCESS,
      payload: 'comment deleted successfully',
    }];
    return store.dispatch(deleteCommentAction({
      articleSlug: 'random-qq',
      commentId: 1,
    })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
