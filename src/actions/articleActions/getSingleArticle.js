import { ARTICLE_FETCH_NOT_FOUND, ARTICLE_FETCH_SUCCESSFUL } from '../ActionTypes';


const getSingleArticle = slug => (dispatch) => {
  let statusCode;
  return fetch(
    `https://ah-backend-xmen-staging.herokuapp.com/api/articles/${slug}/`,
  ).then((res) => {
    const { status } = res;
    statusCode = status;
    return res.json();
  })
    .then((data) => {
      if (statusCode === 404) {
        dispatch({
          type: ARTICLE_FETCH_NOT_FOUND,
          payload: null,
        });
      } else {
        dispatch({
          type: ARTICLE_FETCH_SUCCESSFUL,
          payload: data.articles,
        });
      }
    });
};
export default getSingleArticle;
