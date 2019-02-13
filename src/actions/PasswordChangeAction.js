
import ActionTypes from './ActionTypes';

const passwordChangeAction = (newPassword, token) => (dispatch) => {
  let statusCode;
  return fetch(`https://ah-backend-xmen-staging.herokuapp.com/api/users/password-reset/${token}/`,
    {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          password: newPassword,
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
          payload: data.user['password-reset'],
        });
      } else {
        dispatch({
          type: ActionTypes.PASSWORD_RESET_FAILED,
          payload: data.errors.error[0],
        });
      }
    });
};

export default passwordChangeAction;
