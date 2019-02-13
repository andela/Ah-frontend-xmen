import { toast } from 'react-toastify';
import ActionTypes from './ActionTypes';

const passwordResetAction = email => (dispatch) => {
  let statusCode;
  return fetch('https://ah-backend-xmen-staging.herokuapp.com/api/users/password-reset/',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
        },
      }),
    })
    .then((res) => {
      const { status } = res;
      statusCode = status;
      return res.json();
    })
    .then((data) => {
      if (statusCode < 400) {
        dispatch({
          type: ActionTypes.PASSWORD_RESET_SUCCESS,
          payload: data.user.message,
        });
      } else {
        dispatch({
          type: ActionTypes.PASSWORD_RESET_FAILED,
          payload: data.errors[0],
        });

        toast.error(data.errors[0]);
      }
    });
};

export default passwordResetAction;
