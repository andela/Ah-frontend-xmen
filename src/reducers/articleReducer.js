import { ARTICLE_FETCH_NOT_FOUND, ARTICLE_FETCH_SUCCESSFUL } from '../actions/ActionTypes';


const articleReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_FETCH_NOT_FOUND:
      return {
        ...state,
        article: null,
      };

    case ARTICLE_FETCH_SUCCESSFUL:
      return {
        ...state,
        article: action.payload,
      };

    default:
      return state;
  }
};
export default articleReducer;
