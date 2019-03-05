import { toast } from 'react-toastify';
import { RATE_SUCCESSFUL } from './ActionTypes';

const ratingAction = (slug, rating) => (dispatch) => {
  const { BASE_URL } = process.env;
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/articles/${slug}/rate/`,
    {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ rating }),
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.json())
    .then((data) => {
      const { rating, message, detail } = data.articles;
      if (rating) {
        dispatch({
          type: RATE_SUCCESSFUL,
          payload: rating,
        });
      } else {
        const error = message || detail;
        if (error.includes('token')) toast.error('please login first');
        else toast.error(error);
      }
    });
};

export default ratingAction;
