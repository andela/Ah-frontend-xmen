import commentReducer from './commentReducer';
import ActionTypes from '../../actions/ActionTypes';

describe('Comment Reducer', () => {
  const initialState = {
    getcommentsSuccessful: false,
    payload: [],
    createCommentSuccess: false,
    updateCommentSuccess: false,
  };
  it('should return initial state', () => {
    expect(commentReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle GET COMMENTS SUCCESS', () => {
    expect(commentReducer([], {
      type: ActionTypes.GET_COMMENTS_SUCCESS,
      payload: undefined,
    })).toEqual({
      payload: undefined,
      getcommentsSuccessful: true,

    });
  });

  it('should handle GET COMMENTS FAIL', () => {
    expect(commentReducer([], {
      type: ActionTypes.GET_COMMENTS_FAIL,
      payload: undefined,
    })).toEqual({
      payload: undefined,
    });
  });

  it('should handle CREATE COMMENT FAIL', () => {
    expect(commentReducer([], {
      type: ActionTypes.CREATE_COMMENT_FAIL,
      commentPayload: undefined,
    })).toEqual({
      createCommentSuccess: false,
      commentPayload: undefined,
    });
  });
  it('should handle CREATE COMMENT SUCCESS', () => {
    expect(commentReducer([], {
      type: ActionTypes.CREATE_COMMENT_SUCCESS,
      commentPayload: undefined,
    })).toEqual({
      createCommentSuccess: true,
      commentPayload: undefined,
      getcommentsSuccessful: true,

    });
  });

  it('should handle DELETE COMMENT SUCCESS', () => {
    expect(commentReducer([], {
      type: ActionTypes.DELETE_COMMENT_SUCCESS,
      payload: undefined,
    })).toEqual({
      commentDelete: true,
      payload: undefined,

    });
  });

  it('should handle DELETE COMMENT FAIL', () => {
    expect(commentReducer([], {
      type: ActionTypes.DELETE_COMMENT_FAIL,
      payload: undefined,
    })).toEqual({
      commentDelete: false,
      payload: undefined,

    });
  });

  it('should handle UPDATE COMMENT SUCCESS', () => {
    expect(commentReducer([], {
      type: ActionTypes.UPDATE_COMMENT_SUCCESS,
      payload: undefined,
    })).toEqual({
      updateCommentSuccess: true,

    });
  });

  it('should handle UPDATE COMMENT FAIL', () => {
    expect(commentReducer([], {
      type: ActionTypes.UPDATE_COMMENT_FAIL,
      payload: undefined,
    })).toEqual({
      updateCommentSuccess: false,

    });
  });
});
