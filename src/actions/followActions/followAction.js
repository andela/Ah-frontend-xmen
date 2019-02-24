import ActionTypes from '../ActionTypes';

const { BASE_URL } = process.env;

const token = localStorage.getItem('token');

const followAction = username => dispatch => fetch(`${BASE_URL}/profiles/${username}/follow`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${token}`,
  },
})
  .then(response => response.json())
  .then((data) => {
    if (data.profile.error) {
      dispatch({
        type: ActionTypes.FOLLOW_FAIL,
        payload: data.profile.error,
      });
    } else {
      dispatch({
        type: ActionTypes.FOLLOW_SUCCESS,
        payload: data.profile.message,
      });
    }
  }).catch(err => err);

export default followAction;
