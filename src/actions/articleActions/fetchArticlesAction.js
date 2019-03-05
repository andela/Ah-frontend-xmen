import ActionTypes from '../ActionTypes';

const { BASE_URL } = process.env;

const fetchArticlesAction = (page = 1) => dispatch => fetch(`${BASE_URL}/articles/?limit=6&page=${page}`,
  {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
  .then(res => res.json())
  .then(data => dispatch({
    type: ActionTypes.FETCH_ARTICLES_SUCCESS,
    payload: data.articles,
  }));

export default fetchArticlesAction;
