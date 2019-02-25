import * as actions from '../ActionTypes';
import { handleErrors } from '../ProfileActions';
import { BASE_URL } from '../../constants';

function reportArticleAction(reason) {
  const token = localStorage.getItem('token');
  const slug = localStorage.getItem('slug');
  return (dispatch) => {
    dispatch(actions.reportArticleSuccess());
    return fetch(`${BASE_URL}/articles/${slug}/report`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(reason),
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
      .then(handleErrors)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(error => dispatch(actions.reportArticleFails(error)));
  };
}
export default reportArticleAction;
