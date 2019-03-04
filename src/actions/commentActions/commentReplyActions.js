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
    console.log(data)

  });
}

export const deleteCommentReplyAction = payload => dispatch => {
  console.log(payload)
  return fetch(`${BASE_URL}/articles/${payload.slug}/comments/${payload.commentId}/reply/${payload.reply_id}` ,{
    method:"DELETE",
    headers: {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    },
  }).then(res=>res.json()).then(
    data=>{
      console.log(data)
      if(data.message === "reply delete successfully"){
        dispatch({
          type: ActionTypes.DELETE_ARTICLE_SUCCESS
        })
        toast.success('Reply deleted')
      };
    }
  )
}
