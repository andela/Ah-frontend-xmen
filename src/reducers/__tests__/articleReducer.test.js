import articleReducer from '../articleReducer';
import { ARTICLE_FETCH_NOT_FOUND, ARTICLE_FETCH_SUCCESSFUL } from '../../actions/ActionTypes';

describe('articleReducer', () => {
  it('should return correct state for ARTICLE_FETCH_SUCCESSFUL action', () => {
    const expectedState = {
      article: {},
      loading: false,
    };
    const action = {
      type: ARTICLE_FETCH_SUCCESSFUL,
      payload: {},
    };
    expect(articleReducer({}, action)).toEqual(expectedState);
  });


  it('should return correct state for ARTICLE_FETCH_NOT_FOUND action', () => {
    const expectedState = {
      loading: false,
    };
    const action = {
      type: ARTICLE_FETCH_NOT_FOUND,
      payload: null,
    };
    expect(articleReducer({}, action)).toEqual(expectedState);
  });

  it('should return the initial state for INVALID action', () => {
    const expectedState = {};
    const action = {
      type: 'INVALID',
      payload: {},
    };
    expect(articleReducer({}, action)).toEqual(expectedState);
  });
});
