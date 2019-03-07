import ActionTypes from '../ActionTypes';

const { BASE_URL } = process.env;


const token = localStorage.getItem('token');

const unfollowAction = username => dispatch => fetch(`${BASE_URL}/profiles/${username}/follow`, {
  method: 'DELETE',
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${token}`,
  },
})
  .then(response => response.json())
  .then((data) => {
    if (data.profile.error) {
      dispatch({
        type: ActionTypes.UNFOLLOW_FAIL,
        payload: data.profile.error,
      });
    } else {
      dispatch({
        type: ActionTypes.UNFOLLOW_SUCCESS,
        payload: data.profile.message,
      });
    }
  }).catch(err => err);

export default unfollowAction;
