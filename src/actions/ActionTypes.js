const ActionTypes = {
  FETCH_ARTICLES_FAILED: 'FETCH_ARTICLES_FAILED',
  FETCH_ARTICLES_SUCCESS: 'FETCH_ARTICLES_SUCCESS',

  PASSWORD_RESET_SUCCESS: 'PASSWORD_RESET_SUCCESS',
  PASSWORD_RESET_FAILED: 'PASSWORD_RESET_FAILED',
  GET_COMMENTS_SUCCESS: 'GET_COMMENTS_SUCCESS',
  GET_COMMENTS_FAIL: 'GET_COMMENTS_FAIL',
  CREATE_COMMENT_SUCCESS: 'CREATE_COMMENT_SUCCESS',
  CREATE_COMMENT_FAIL: 'CREATE_COMMENT_FAIL',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAIL: 'AUTH_FAIL',
  DELETE_COMMENT_START: 'DELETE_COMMENT_START',
  DELETE_COMMENT_SUCCESS: 'DELETE_COMMENT_SUCCESS',
  DELETE_COMMENT_FAIL: 'DELETE_COMMENT_FAIL',
  UPDATE_COMMENT_SUCCESS: 'UPDATE_COMMENT_SUCCESS',
  UPDATE_COMMENT_FAIL: 'UPDATE_COMMENT_FAIL',
  CREATE_ARTICLE_SUCCESS: 'ARTICLE_SUCCESS',
  CREATE_ARTICLE_FALIURE: 'ARTICLE_FALIURE',
  EDIT_ARTICLE_SUCCESS: 'EDIT_ARTICLE_SUCCESS',
  EDIT_ARTICLE_FALIURE: 'EDIT_ARTICLE_FALIURE',
  DELETE_ARTICLE_SUCCESS: 'DELETE_ARTICLE_SUCCESS',
  BOOKMARK_SUCCESS: 'BOOKMARK_SUCCESS',
  UNBOOKMARK_SUCCESS: 'UNBOOKMARK_SUCCESS',
  BOOKMARK_FAILURE: 'BOOKMARK_FAILURE',
  BOOKMARK_LIST_FETCHED: 'BOOKMARK_LIST_FETCHED',
  BOOKMARK_LIST_EMPTY: 'BOOKMARK_LIST_EMPTY',
  FOLLOW_SUCCESS: 'FOLLOW_SUCCESS',
  FOLLOW_FAIL: 'FOLLOW_FAIL',
  UNFOLLOW_SUCCESS: 'UNFOLLOW_SUCCESS',
  UNFOLLOW_FAIL: 'UNFOLLOW_FAIL',
  GET_FOLLOWERS_SUCCESS: 'GET_FOLLOWERS_SUCCESS',
  GET_FOLLOWERS_NONE: 'GET_FOLLOWERS_NONE',
  GET_FOLLOWING_SUCCESS: 'GET_FOLLOWING_SUCCESS',
  GET_FOLLOWING_NONE: 'GET_FOLLOWING_NONE',
  FETCH_TAGS_SUCCESS: 'FETCH_TAGS_SUCCESS',
};

export default ActionTypes;

export const FACEBOOK_SIGNIN_SUCCESS = 'FACEBOOK_SIGNIN_SUCCESS';

export const FACEBOOK_SIGNIN_FAIL = 'FACEBOOK_SIGNIN_FAIL';

export const GOOGLE_SIGNIN_SUCCESS = 'GOOGLE_SIGNIN_SUCCESS';

export const GOOGLE_SIGNIN_FAIL = 'GOOGLE_SIGNIN_FAIL';
export const GET_PROFILE_SUCCEEDS = 'GET_PROFILE_SUCCEEDS';
export const EDIT_PROFILE_SUCCEEDS = 'EDIT_PROFILE_SUCCEEDS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';
export const EDIT_PROFILE_FAILS = 'EDIT_PROFILE_FAILS';
export const GET_PROFILE_BEGIN = 'GET_PROFILE_BEGIN';
export const EDIT_PROFILE_BEGIN = 'EDIT_PROFILE_BEGIN';

export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';

export const ARTICLE_FETCH_NOT_FOUND = 'ARTICLE_FETCH_NOT_FOUND';
export const ARTICLE_FETCH_SUCCESSFUL = 'ARTICLE_FETCH_SUCCESSFUL';

export const ARTICLE_LIKE_SUCCESSFUL = 'ARTICLE_LIKE_SUCCESSFUL';
export const ARTICLE_LIKE_FAILURE = 'ARTICLE_LIKE_FAILURE';
export const ARTICLE_UNLIKE_SUCCESSFUL = 'ARTICLE_UNLIKE_SUCCESSFUL';
export const ARTICLE_UNLIKE_FAILURE = 'ARTICLE_UNLIKE_FAILURE';
export const ARTICLE_DISLIKE_SUCCESSFUL = 'ARTICLE_DISLIKE_SUCCESSFUL';
export const ARTICLE_DISLIKE_FAILURE = 'ARTICLE_DISLIKE_FAILURE';
export const ARTICLE_UNDISLIKE_SUCCESSFUL = 'ARTICLE_UNDISLIKE_SUCCESSFUL';
export const ARTICLE_UNDISLIKE_FAILURE = 'ARTICLE_UNDISLIKE_FAILURE';
export const ARTICLE_FETCH_LIKES_SUCCESSFUL = 'ARTICLE_FETCH_LIKES_SUCCESSFUL';
export const RATE_SUCCESSFUL = 'RATE_SUCCESSFUL';

export const REPORT_ARTICLE_SUCCEEDS = 'REPORT_ARTICLE_SUCCEEDS';
export const REPORT_ARTICLE_FAILS = 'REPORT_ARTICLE_FAILS';
export const PROFILES_FETCH_SUCCESS = 'PROFILES_FETCH_SUCCESS';
export const PROFILES_FETCH_FAIL = 'PROFILES_FETCH_FAIL';

export const getProfileSucceeds = profile => ({
  type: GET_PROFILE_SUCCEEDS,
  payload: { profile },
});

export const getProfileFails = error => ({
  type: GET_PROFILE_FAIL,
  payload: { error },
});

export const editProfileFails = error => ({
  type: EDIT_PROFILE_FAILS,
  payload: { error },
});

export const editProfilesSucceeds = payload => ({
  type: EDIT_PROFILE_SUCCEEDS,
  payload,
});

export const getProfileBegin = () => ({
  type: GET_PROFILE_BEGIN,
});

export const editProfileBegin = () => ({
  type: EDIT_PROFILE_BEGIN,
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const reportArticleSuccess = payload => ({
  type: REPORT_ARTICLE_SUCCEEDS,
  payload,
});

export const reportArticleFails = error => ({
  type: REPORT_ARTICLE_FAILS,
  payload: { error },
});
