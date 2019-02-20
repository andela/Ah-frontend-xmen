import ActionTypes from '../../actions/ActionTypes';
import fetchArticlesReducer from '../fetchArticlesReducer';

describe('Article reducers', () => {
  it('should fetch articles', () => {
    const initialState = {
      articles: [],
    };
    const action = {
      type: ActionTypes.FETCH_ARTICLES_SUCCESS,
      payload: { articles: { articles: {} } },
    };

    const expected = {
      ...initialState,
      articles: { articles: { articles: {} } },
    };

    const newState = fetchArticlesReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('should return an initial state', () => {
    const initialState = {
      articles: [],
    };
    const reducer = fetchArticlesReducer(initialState, {});
    expect(reducer).toEqual(initialState);
  });
});
