import { FACEBOOK_SIGNIN_SUCCESS, FACEBOOK_SIGNIN_FAIL } from '../ActionTypes';
import { BASE_URL } from '../../constants';

const facebookSignIn = auth_token => (dispatch) => {
  fetch(`${BASE_URL}/users/facebook-login/`, {
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
          type: FACEBOOK_SIGNIN_FAIL,
          payload: data.errors,
        });
      } else {
        dispatch({
          type: FACEBOOK_SIGNIN_SUCCESS,
          payload: data,
        });
      }
    },
  );
};

export default facebookSignIn;
