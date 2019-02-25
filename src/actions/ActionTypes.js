const ActionTypes = {
  FETCH_ARTICLES_FAILED: 'FETCH_ARTICLES_FAILED',
  FETCH_ARTICLES_SUCCESS: 'FETCH_ARTICLES_SUCCESS',
  PASSWORD_RESET_SUCCESS: 'PASSWORD_RESET_SUCCESS',
  PASSWORD_RESET_FAILED: 'PASSWORD_RESET_FAILED',

  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
};

export default ActionTypes;
export const FACEBOOK_SIGNIN_SUCCESS = 'FACEBOOK_SIGNIN_SUCCESS';

export const FACEBOOK_SIGNIN_FAIL = 'FACEBOOK_SIGNIN_FAIL';

export const GOOGLE_SIGNIN_SUCCESS = 'GOOGLE_SIGNIN_SUCCESS';

export const GOOGLE_SIGNIN_FAIL = 'GOOGLE_SIGNIN_FAIL';
/* eslint-disable import/prefer-default-export */
export const GET_PROFILE_SUCCEEDS = 'GET_PROFILE_SUCCEEDS';
export const EDIT_PROFILE_SUCCEEDS = 'EDIT_PROFILE_SUCCEEDS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';
export const EDIT_PROFILE_FAILS = 'EDIT_PROFILE_FAILS';
export const GET_PROFILE_BEGIN = 'GET_PROFILE_BEGIN';
export const EDIT_PROFILE_BEGIN = 'EDIT_PROFILE_BEGIN';


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
