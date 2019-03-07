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
      // console.log('===========>incoming', action.payload);
      // console.log('=================> current',state.payload)
      const incomingReplies= action.payload.map(incomingReply => {
        
        const currentReplies=state.payload.map(currentReply=>{
          // console.log('............> currentReply',currentReply)
          // console.log('-------> incoming',incomingReply)
          if(incomingReply.id===currentReply.id){
            console.log(incomingReply.id)
            console.log(currentReply.id)
          }
        })
      } )
   
      const allReplies=[...state.payload, ...action.payload]
      console.log('=========> all', allReplies)
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
