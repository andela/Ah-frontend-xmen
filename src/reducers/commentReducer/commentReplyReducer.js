import ActionTypes from '../../actions/ActionTypes';

const initialState = {
  isSuccessful: false,
    payload:[],
  repliesCount:"",
  replyCreateSuccess:false,
  replyDeleteSuccess:false,
  replyUpdateSuccess:false,
  errors:""
}

const commentReplyReducer = (state=initialState, action) => {
  switch (action.type) {
    case (ActionTypes.GET_COMMENT_REPLIES_SUCCESS):
      return{
        ...state,
        isSuccessful: true,
        payload: action.payload.reverse(),
        repliesCount:action.replyCount
      }
    case (ActionTypes.GET_COMMENT_REPLIES_FAIL):
      return{
        ...state,
        isSuccessful:false,
        payload:action.payload
      }
    case(ActionTypes.CREATE_COMMENT_REPLY_SUCCESS):
      return{
        ...state,
        replyCreateSuccess: true,

      }
    case (ActionTypes.CREATE_COMMENT_REPLY_FAIL):
      return{
        ...state,
        replyCreateSuccess:false,
        errors: action.errors
      }
    case (ActionTypes.DELETE_COMMENT_START):
    {
      const replies = state.payload
      const results = replies.filter( reply => {
      return reply.id !== parseInt(action.reply_id)
      });
      return {
        ...state,
        payload: results
      }

    };
    case (ActionTypes.DELETE_COMMENT_REPLY_SUCCESS):
      return {
        ...state,
        replyDeleteSuccess: true,
    }

    case (ActionTypes.DELETE_COMMENT_REPLY_FAIL):
      return {
        ...state,
        replyDeleteSuccess: false,
        errors: action.errors
      }
    case(ActionTypes.UPDATE_COMMENT_REPLY_BEGIN):
    {
      let replies = state.payload
      const results = replies.map((reply,index) => {
        if(reply.id !== parseInt(action.reply_id)){
            return reply
          }
        else {
          reply.reply_body = action.body
          return{
            ...reply
          }
        }
      });
      return{
        ...state,
        payload: results
      }
    }
    case (ActionTypes.UPDATE_COMMENT_REPLY_SUCCESS):
      return {
        ...state,
        replyUpdateSuccess: true,
      }
    default:
      return state

  }
};
export  default commentReplyReducer;
