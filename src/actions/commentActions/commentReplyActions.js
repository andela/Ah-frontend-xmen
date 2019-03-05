import  ActionTypes from '../ActionTypes';
import {BASE_URL} from '../../constants';
import {toast} from 'react-toastify'
const token =localStorage.getItem('token')

export const getCommentReplies = (payload) => dispatch => {
  return fetch(`${BASE_URL}/articles/${payload.slug}/comments/${payload.commentId}/reply`).then(
    res=>res.json()
  ).then(
    data=>{
      if (data.replies) {
        dispatch({
          type:ActionTypes.GET_COMMENT_REPLIES_SUCCESS,
          payload:data.replies,
          replyCount:data.repliesCount
        })
      }
      else {
        dispatch({
          type:ActionTypes.GET_COMMENT_REPLIES_FAIL,
          payload:data
        })
      }
    }
  )
};

export const createCommentReplyAction = payload => dispatch => {
  return fetch(`${BASE_URL}/articles/${payload.slug}/comments/${payload.commentId}/reply/`,{
    method:"POST",
    headers: {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    },
    body:JSON.stringify(payload.reply_body)
  }).then(
    res=>res.json()
  ).then(data=>{
      if(data.reply){
        dispatch({
          type:ActionTypes.CREATE_COMMENT_REPLY_SUCCESS
        })
      }
      toast.success('Reply added')
  });
}

export const deleteCommentReplyAction = payload => dispatch => {
  return fetch(`${BASE_URL}/articles/${payload.slug}/comments/${payload.commentId}/reply/${payload.reply_id}` ,{
    method:"DELETE",
    headers: {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    },
  }).then(res=>res.json()).then(
    data => {
      dispatch({
        type:ActionTypes.DELETE_COMMENT_START,
        reply_id: payload.reply_id
      });
      if(data.message === "reply delete successfully"){
        dispatch({
          type: ActionTypes.DELETE_ARTICLE_SUCCESS,
          reply_id: parseInt(payload.reply_body_id)
        })
        toast.success('Reply deleted')
      };
    }
  )
};
export  const updateCommentReplyAction = payload => dispatch => {
  return fetch(`${BASE_URL}/articles/${payload.slug}/comments/${payload.commentId}/reply/${payload.reply_id}/` ,{
    method:"PUT",
    headers: {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    },
    body:JSON.stringify({
      "reply_body":payload.reply_body
    })
  }).then(res=>res.json()).then(
    data => {
      dispatch({
        type: ActionTypes.UPDATE_COMMENT_REPLY_BEGIN,
        body:payload.reply_body,
        reply_id:payload.reply_id
      })
      if(data.erros){
       dispatch({
         type: ActionTypes.UPDATE_COMMENT_REPLY_FAIL,
         errors: data.erros
       })
        toast.error(data.erros)
      }
      else if(data.data){
        dispatch({
          type:ActionTypes.UPDATE_COMMENT_REPLY_SUCCESS,
        })
        toast.success('Content updated')
      }

    }
  )

};

