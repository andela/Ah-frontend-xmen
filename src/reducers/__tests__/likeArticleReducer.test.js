import {
  ARTICLE_DISLIKE_SUCCESSFUL,
  ARTICLE_LIKE_SUCCESSFUL,
  ARTICLE_LIKE_FAILURE,
  ARTICLE_FETCH_LIKES_SUCCESSFUL,
} from '../../actions/ActionTypes';
import likeArticleReducer from '../LikeArticleReducer';

const initialState = {
  liked: false,
  disliked: false,
  likesCount: 0,
  dislikesCount: 0,
  errorMessage: {},

};
describe('article likes/dislikes reducer', () => {
  it('should return default state with INVALID action', () => {
    const action = {
      type: 'INVALID',
    };
    expect(likeArticleReducer(initialState, action)).toEqual(initialState);
  });

  it('should return correct state with ARTICLE_LIKE_SUCCESSFUL action', () => {
    const action = {
      type: ARTICLE_LIKE_SUCCESSFUL,
      payload: true,
    };
    const expectedState = {
      liked: true,
      disliked: false,
      likesCount: 1,
      dislikesCount: 0,
      errorMessage: {},
    };
    expect(likeArticleReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return correct state with ARTICLE_DISLIKE_SUCCESSFUL action', () => {
    const action = {
      type: ARTICLE_DISLIKE_SUCCESSFUL,
      payload: true,
    };
    const expectedState = {
      liked: false,
      disliked: true,
      likesCount: 0,
      dislikesCount: 1,
      errorMessage: {},
    };
    expect(likeArticleReducer(initialState, action)).toEqual(expectedState);
  });
  it('should return correct state with ARTICLE_LIKE_FAILURE, action', () => {
    const action = {
      type: ARTICLE_LIKE_FAILURE,
      payload: 'please login first',
    };
    const expectedState = {
      liked: false,
      disliked: false,
      likesCount: 0,
      dislikesCount: 0,
      errorMessage: 'please login first',
    };
    expect(likeArticleReducer(initialState, action)).toEqual(expectedState);
  });
  it('should return correct state with  ARTICLE_FETCH_LIKES_SUCCESSFUL action', () => {
    const action = {
      type: ARTICLE_FETCH_LIKES_SUCCESSFUL,
      payload: {
        liked: true,
        disliked: false,
        likesCount: 0,
        dislikesCount: 1,
      },
    };
    const expectedState = {
      liked: true,
      disliked: false,
      likesCount: 0,
      dislikesCount: 1,
      errorMessage: {},
    };
    expect(likeArticleReducer(initialState, action)).toEqual(expectedState);
  });
});
