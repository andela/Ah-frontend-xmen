import ActionTypes from '../ActionTypes';

const { BASE_URL } = process.env;

const token = localStorage.getItem('token');

const followersListAction = username => (dispatch) => {
  let statusCode;
  return fetch(`${BASE_URL}/profiles/${username}/followers`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
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
          type: ActionTypes.GET_FOLLOWERS_SUCCESS,
          payload: data.profiles,
        });
      } else {
        dispatch({
          type: ActionTypes.GET_FOLLOWERS_NONE,
          payload: [],
        });
      }
    }).catch(err => err);
};

export default followersListAction;
