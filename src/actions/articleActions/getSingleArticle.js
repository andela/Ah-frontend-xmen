import { ARTICLE_FETCH_NOT_FOUND, ARTICLE_FETCH_SUCCESSFUL } from '../ActionTypes';
import { BASE_URL } from '../../constants';


const getSingleArticle = slug => (dispatch) => {
  let statusCode;
  const token = localStorage.getItem('token');
  const headers = token ? { headers: { Authorization: ` Bearer ${token}` } } : {};
  return fetch(
    `${BASE_URL}/articles/${slug}/`,
    headers,
  ).then((res) => {
    const { status } = res;
    statusCode = status;
    return res.json();
  })
    .then((data) => {
      if (statusCode === 403) {
        localStorage.removeItem('token');
        window.location.reload();
      }
      if (statusCode === 404) {
        dispatch({
          type: ARTICLE_FETCH_NOT_FOUND,
          payload: null,
        });
      } else {
        localStorage.setItem('article', JSON.stringify(data.articles));
        dispatch({
          type: ARTICLE_FETCH_SUCCESSFUL,
          payload: data.articles,
        });
      }
    });
};
export default getSingleArticle;
