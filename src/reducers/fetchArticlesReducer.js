import ActionTypes from '../actions/ActionTypes';

const initialState = {
  articles: [],
};

const fetchArticles = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default fetchArticles;
