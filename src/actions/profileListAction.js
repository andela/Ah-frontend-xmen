import { PROFILES_FETCH_SUCCESS, PROFILES_FETCH_FAIL } from './ActionTypes';

const { BASE_URL } = process.env;

const token = localStorage.getItem('token');

const profileListAction = () => (dispatch) => {
  let statusCode;
  return fetch(`${BASE_URL}/profiles`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      const { status } = response;
      statusCode = status;
      return response.json();
    })
    .then((data) => {
      if (statusCode === 200) {
        dispatch({
          type: PROFILES_FETCH_SUCCESS,
          payload: data.profiles,
        });
      } else {
        dispatch({
          type: PROFILES_FETCH_FAIL,
          payload: [],
        });
      }
    }).catch(err => err);
};

export default profileListAction;
