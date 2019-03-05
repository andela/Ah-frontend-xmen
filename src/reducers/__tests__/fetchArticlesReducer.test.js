import ActionTypes from '../../actions/ActionTypes';
import fetchArticlesReducer from '../fetchArticlesReducer';

describe('Article reducers', () => {
  it('should fetch articles', () => {
    const initialState = {
      articles: [],
      currentPage: 1,
      allArticles: 1,
    };
    const action = {
      type: ActionTypes.FETCH_ARTICLES_SUCCESS,
      payload: { results: [{ title: 'title' }], count: 1 },
    };

    const expected = {
      ...initialState,
      articles: [{ title: 'title' }],
      allArticles: 1,
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
