import ActionTypes from './ActionTypes';

const { BASE_URL } = process.env;

const registerUser = payload => dispatch => fetch(`${BASE_URL}/users/`, {
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify({
    user: payload,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
}).then(
  response => response.json(),
).then(
  (data) => {
    if (data.errors) {
      dispatch({
        type: ActionTypes.REGISTER_FAILURE,
        payload: data.errors,
      });
    } else {
      dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
        payload: {
          token: data.user.Info.token,
          message: data.user.message,
        },
      });
      localStorage.setItem('token', data.user.Info.token);
      localStorage.setItem('username', data.user.Info.username);
    }
  },
).catch(error => error);
export default registerUser;
