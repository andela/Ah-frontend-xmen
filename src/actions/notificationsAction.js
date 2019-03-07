import { FETCH_NOTIFICATIONS_SUCCESS } from './ActionTypes';
import { BASE_URL } from '../constants';


const notificationsAction = markAsRead => (dispatch) => {
  let statusCode;
  const token = localStorage.getItem('token');
  return fetch(
    `${BASE_URL}/notifications/all`,
    {
      method: markAsRead ? 'PUT' : 'GET',
      headers: { Authorization: `Bearer ${token}` },
    },
  ).then((res) => {
    statusCode = res.status;
    return res.json();
  })
    .then((data) => {
      if (statusCode === 403) {
        localStorage.removeItem('token');
      } else if (statusCode < 400) {
        dispatch({
          type: FETCH_NOTIFICATIONS_SUCCESS,
          payload: data.notification,
        });
      }
    });
};

export default notificationsAction;
