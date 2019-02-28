import articleEditorReducer from '../articleEditorReducer';
import ActionTypes from '../../actions/ActionTypes';

describe('articleEditorReducer', () => {
  it('should return the inital state', () => {
    const initalState = {};
    expect(articleEditorReducer(initalState, {})).toEqual({});
  });
  it('should return for CREATE_ARTICLE_SUCCESS action', () => {
    const expectedState = {
      article: {},
      isSuccessful: true,
    };
    const action = {
      type: ActionTypes.CREATE_ARTICLE_SUCCESS,
      payload: {},
    };
    expect(articleEditorReducer({}, action)).toEqual(expectedState);
  });
  it('should return CREATE_ARTICLE_FALIURE action', () => {
    const expectedState = {
      errors: {},
      isSuccessful: false,
    };
    const action = {
      type: ActionTypes.CREATE_ARTICLE_FALIURE,
      payload: {},
    };
    expect(articleEditorReducer({}, action)).toEqual(expectedState);
  });
  it('should return EDIT_ARTICLE_SUCCESS action', () => {
    const expectedState = {
      article: {},
      isEditSuccessful: true,
    };
    const action = {
      type: ActionTypes.EDIT_ARTICLE_SUCCESS,
      payload: {},
    };
    expect(articleEditorReducer({}, action)).toEqual(expectedState);
  });
  it('should return EDIT_ARTICLE_FALIURE action', () => {
    const expectedState = {
      errors: {},
      isEditSuccessful: false,
    };
    const action = {
      type: ActionTypes.EDIT_ARTICLE_FALIURE,
      payload: {},
    };
    expect(articleEditorReducer({}, action)).toEqual(expectedState);
  });
  it('should return DELETE_ARTICLE_SUCCESS action', () => {
    const expectedState = {
      message: {},
      isArticleDeleted: true,
    };
    const action = {
      type: ActionTypes.DELETE_ARTICLE_SUCCESS,
      payload: {},
    };
    expect(articleEditorReducer({}, action)).toEqual(expectedState);
  });
});
