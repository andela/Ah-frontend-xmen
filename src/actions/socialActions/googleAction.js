import { GOOGLE_SIGNIN_SUCCESS, GOOGLE_SIGNIN_FAIL } from '../ActionTypes';
import { BASE_URL } from '../../constants';


const googleSignIn = auth_token => (dispatch) => {
  fetch(`${BASE_URL}/users/google-login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ auth_token }),
  }).then(
    res => res.json(),
  ).then(
    (data) => {
      if (data.errors) {
        dispatch({
          type: GOOGLE_SIGNIN_FAIL,
          payload: data.errors,
        });
      } else {
        dispatch({
          type: GOOGLE_SIGNIN_SUCCESS,
          payload: data,
          token: data.user.token,
        });
      }
    },
  ).catch((err) => {
    dispatch({
      type: GOOGLE_SIGNIN_FAIL,
      payload: err,
    });
  });
};

export default googleSignIn;
