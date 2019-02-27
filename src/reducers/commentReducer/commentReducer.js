import ActionTypes from '../../actions/ActionTypes';

const initialState = {
  getcommentsSuccessful: false,
  payload: [],
  createCommentSuccess: false,
  updateCommentSuccess: false,


};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        getcommentsSuccessful: true,
        payload: action.payload,
      };

    case (ActionTypes.GET_COMMENTS_FAIL):
      return {
        ...state,
        payload: action.payload,
      };
    case (ActionTypes.CREATE_COMMENT_SUCCESS):
      return {
        ...state,
        getcommentsSuccessful: true,
        createCommentSuccess: true,
        commentPayload: action.payload,
      };
    case (ActionTypes.CREATE_COMMENT_FAIL):
      return {
        ...state,
        createCommentSuccess: false,
        commentPayload: action.payload,
      };
    case (ActionTypes.DELETE_COMMENT_SUCCESS):
      return {
        ...state,
        commentDelete: true,
        payload: action.payload,
      };
    case (ActionTypes.DELETE_COMMENT_FAIL):
      return {
        ...state,
        commentDelete: false,
        payload: action.payload,
      };
    case (ActionTypes.UPDATE_COMMENT_SUCCESS):
      return {
        ...state,
        updateCommentSuccess: true,
      };
    case (ActionTypes.UPDATE_COMMENT_FAIL):
      return {
        ...state,
        updateCommentSuccess: false,
      };
    default:
      return state;
  }
};

export default commentReducer;
