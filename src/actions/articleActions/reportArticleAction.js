import * as actions from '../ActionTypes';
import { handleErrors } from '../ProfileActions';
import { BASE_URL } from '../../constants';

function reportArticleAction(payload) {
  const token = localStorage.getItem('token');
  const slug = localStorage.getItem('slug');
  return (dispatch) => {
    dispatch(actions.reportArticleSuccess());
    return fetch(`${BASE_URL}/articles/${slug}/report`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
      .then(handleErrors)
      .then(res => res.json())
      .then((data) => {
        if (data) {
          dispatch(actions.reportArticleSuccess);
        }
      })
      .catch(error => dispatch(actions.reportArticleFails(error)));
  };
}
export default reportArticleAction;
