import ActionTypes from '../ActionTypes';

const { BASE_URL } = process.env;

const fetchArticlesAction = () => dispatch => fetch(`${BASE_URL}/articles/?limit=6`)
  .then(res => res.json())
  .then(data => dispatch({
    type: ActionTypes.FETCH_ARTICLES_SUCCESS,
    payload: data.articles.results,
  }));

export default { fetchArticlesAction };
