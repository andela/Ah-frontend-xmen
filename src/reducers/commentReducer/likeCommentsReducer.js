
const initialState = {
  isLiked: false,
  payload: [],

};

const likeCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIKE_COMMENT_SUCCESS':
      return {
        ...state,
        isLiked: true,
        payload: action.payload,
      };

    case 'LIKE_COMMENT_FAIL':
      return {
        ...state,
        isLiked: false,
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default likeCommentReducer;
