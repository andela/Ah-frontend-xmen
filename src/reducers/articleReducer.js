import { ARTICLE_FETCH_NOT_FOUND, ARTICLE_FETCH_SUCCESSFUL } from '../actions/ActionTypes';

const initialState = {
  loading: true,
  article: {
    title: '',
    body: '',
    image: '',
    description: '',
    author: {
      username: '',
      image: '',
    },
  },
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_FETCH_NOT_FOUND:
      return {
        ...state,
        loading: false,
      };

    case ARTICLE_FETCH_SUCCESSFUL:
      return {
        ...state,
        article: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default articleReducer;
