import * as actions from './ActionTypes';
import { BASE_URL } from '../constants';


const username = localStorage.getItem('username');
const token = localStorage.getItem('token');

export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default function fetchProfile() {
  return (dispatch) => {
    dispatch(actions.getProfileBegin());
    return fetch(`${BASE_URL}/profiles/${username}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(handleErrors)
      .then(res => res.json())
      .then((json) => {
        dispatch(actions.getProfileSucceeds(json.profile));
        const users = [];
        const user = json.profile;
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        return json.profile;
      })
      .catch(error => dispatch(actions.getProfileFails(error)));
  };
}
