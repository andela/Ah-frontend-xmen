
import { toast } from 'react-toastify';
import { ARTICLE_DISLIKE_SUCCESSFUL, ARTICLE_LIKE_SUCCESSFUL, ARTICLE_LIKE_FAILURE } from '../ActionTypes';

const likeDislikeArticleAction = (slug, shouldPut, isLikeBtn) => (dispatch) => {
  const token = localStorage.getItem('token');
  const { BASE_URL } = process.env;
  let statusCode;
  return fetch(
    `${BASE_URL}/articles/${slug}/likes/`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: shouldPut ? 'PUT' : 'DELETE',
      body: JSON.stringify({ like_article: isLikeBtn }),
    },

  ).then((res) => {
    const { status } = res;
    statusCode = status;
    return res.json();
  }).then(() => {
    if (statusCode < 300) {
      if (isLikeBtn) {
        dispatch({
          type: ARTICLE_LIKE_SUCCESSFUL,
          payload: shouldPut,
        });
      } else {
        dispatch({
          type: ARTICLE_DISLIKE_SUCCESSFUL,
          payload: shouldPut,
        });
      }
    } else {
      const errorMessage = 'please log in first';
      const payload = isLikeBtn ? { like: errorMessage } : { dislike: errorMessage };
      toast.error(errorMessage);
      dispatch({
        type: ARTICLE_LIKE_FAILURE,
        payload,
      });
    }
  });
};

export default likeDislikeArticleAction;
