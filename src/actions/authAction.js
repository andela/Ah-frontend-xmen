
import { BASE_URL } from '../constants';
import ActionTypes from './ActionTypes';

const token = localStorage.getItem('token');

const getAuthUserDetails = () => dispatch => fetch(`${BASE_URL}/user`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then(
  res => res.json(),
).then((data) => {
  if (data.username || data.email) {
    return fetch(`${BASE_URL}/profiles/${data.username}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },

    }).then(
      res => res.json(),
    ).then(
      (data) => {
        if (data.profile) {
          dispatch({
            type: ActionTypes.AUTH_SUCCESS,
            payload: data,
          });
        } else {
          dispatch({
            type: ActionTypes.AUTH_FAIL,
            payload: data.errors,
          });
        }
      },
    );
  }
});
export default getAuthUserDetails;
