import ActionTypes from '../../actions/ActionTypes';

const initialState = {
  isSuccessful: false,
    payload:[]
}

const commentReplyReducer =(state=initialState,action) => {
  switch (action.type) {
    case (ActionTypes.GET_COMMENT_REPLIES_SUCCESS):
      return{
        ...state,
        isSuccessful:true,
        payload:action.payload
      }
    default:
      return state

  }
};
export  default commentReplyReducer
