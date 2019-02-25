
import { ARTICLE_FETCH_LIKES_SUCCESSFUL, ARTICLE_LIKE_FAILURE } from '../ActionTypes';


const getLikeDislikeArticleStatus = slug => (dispatch) => {
  const { BASE_URL } = process.env;
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  let statusCode;

  return fetch(
    `${BASE_URL}/articles/${slug}/likes/`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,

      },
    },
  ).then((res) => {
    const { status } = res;
    statusCode = status;
    return res.json();
  }).then((data) => {
    if (statusCode < 400) {
      const payload = {
        liked: data.articles.likes.includes(username),
        disliked: data.articles.dislikes.includes(username),
        likesCount: data.articles.likes.length,
        dislikesCount: data.articles.dislikes.length,
      };
      dispatch({
        type: ARTICLE_FETCH_LIKES_SUCCESSFUL,
        payload,
      });
    } else if (statusCode === 403) {
      dispatch({
        type: ARTICLE_LIKE_FAILURE,
        payload: data.articles.detail,
      });
    }
  });
};

export default getLikeDislikeArticleStatus;
