import  ActionTypes from '../ActionTypes';
import {BASE_URL} from '../../constants';

export const getCommentReplies = (payload) => dispatch => {
  console.log(payload)
  return fetch(`${BASE_URL}/articles/${payload.slug}/comments/${payload.commentId}/reply`).then(
    res=>res.json()
  ).then(
    data=>{
      console.log('all replies========>',data.replies)

      dispatch({
        type:ActionTypes.GET_COMMENT_REPLIES_SUCCESS,
        payload:data.replies
      })

    }
  )


};

