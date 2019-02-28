import {
  ARTICLE_DISLIKE_SUCCESSFUL,
  ARTICLE_LIKE_SUCCESSFUL,
  ARTICLE_LIKE_FAILURE,
  ARTICLE_FETCH_LIKES_SUCCESSFUL,
} from '../actions/ActionTypes';

const initialState = {
  liked: false,
  disliked: false,
  likesCount: 0,
  dislikesCount: 0,
  errorMessage: {},

};
const likeArticlereducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_LIKE_SUCCESSFUL:
      return {
        ...state,
        liked: action.payload,
        disliked: (action.payload && state.disliked) ? false : state.disliked,
        likesCount: action.payload ? state.likesCount + 1 : state.likesCount - 1,
        dislikesCount:
        (action.payload && state.disliked) ? state.dislikesCount - 1 : state.dislikesCount,
      };
    case ARTICLE_DISLIKE_SUCCESSFUL:
      return {
        ...state,
        disliked: action.payload,
        liked: (action.payload && state.liked) ? false : state.liked,
        likesCount: (action.payload && state.liked) ? state.likesCount - 1 : state.likesCount,
        dislikesCount: action.payload ? state.dislikesCount + 1 : state.dislikesCount - 1,
      };
    case ARTICLE_LIKE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case ARTICLE_FETCH_LIKES_SUCCESSFUL:
      return {
        ...state,
        liked: action.payload.liked,
        disliked: action.payload.disliked,
        likesCount: action.payload.likesCount,
        dislikesCount: action.payload.dislikesCount,
      };
    default:
      return { ...state };
  }
};

export default likeArticlereducer;
