import { toast } from 'react-toastify';
import ActionTypes from '../ActionTypes';
import { BASE_URL } from '../../constants';


const token = localStorage.getItem('token');

const getCommentsAction = payload => dispatch => fetch(`${BASE_URL}/articles/${payload.articleSlug}/comments/`, {
  method: 'GET',
  headers: {
  },
}).then(res => res.json()).then((data) => {
  if (data.comments) {
    dispatch({
      type: ActionTypes.GET_COMMENTS_SUCCESS,
      payload: data,
    });
  } else {
    dispatch({
      type: ActionTypes.GET_COMMENTS_FAIL,
      payload: data,
    });
  }
});

export const postCommentAction = payload => dispatch => fetch(`${BASE_URL}/articles/${payload.articleSlug}/comments/`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload.payload),
}).then(
  res => res.json(),
).then(
  (data) => {
    if (data.comment) {
      dispatch({
        type: ActionTypes.CREATE_COMMENT_SUCCESS,
        payload: data,
      });
      toast.success('Commented on Article Successfully');
    } else {
      dispatch({
        type: ActionTypes.CREATE_COMMENT_FAIL,
        payload: data,
      });
    }
  },
);

export const deleteCommentAction = payload => dispatch => fetch(`${BASE_URL}/articles/${payload.articleSlug}/comments/${payload.commentId}/`, {
  method: 'DELETE',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },

}).then(
  res => res.json(),
).then(
  (data) => {
    if (data.message === 'comment deleted successfully') {
      dispatch({
        type: ActionTypes.DELETE_COMMENT_SUCCESS,
        payload: data.message,
      });
      toast.error('Deleted successfully');
    }
  },
);

export const UpdateCommentAction = payload => dispatch => fetch(`${BASE_URL}/articles/${payload.articleSlug}/comments/${payload.commentId}/`, {
  method: 'PUT',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ body: payload.payload }),
}).then(
  res => res.json(),
).then(
  (data) => {
    if (data.data) {
      dispatch({
        type: ActionTypes.UPDATE_COMMENT_SUCCESS,
        payload: data,
      });
      toast.success('Updated successfully');
    } else if (data.errors) {
      dispatch({
        type: ActionTypes.UPDATE_COMMENT_FAIL,
        payload: data.errors,
      });
      toast.error(data.errors.body[0]);
    }
  },
);


export default getCommentsAction;
