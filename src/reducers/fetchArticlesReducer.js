import ActionTypes from '../actions/ActionTypes';

const initialState = {
  articles: [],
  currentPage: 1,
  allArticles: 1,
};

const fetchArticles = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload.results,
        allArticles: action.payload.count,
      };
    default:
      return state;
  }
};

export default fetchArticles;
