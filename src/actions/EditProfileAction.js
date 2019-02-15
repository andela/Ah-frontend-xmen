import * as actions from './ActionTypes';
import { handleErrors } from './ProfileActions';
import { BASE_URL } from '../constants';


export default function editProfile(profileData) {
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('token');

  return (dispatch) => {
    dispatch(actions.editProfileBegin());
    return fetch(`${BASE_URL}/profiles/${username}/edit`, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(profileData),
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },

    })
      .then(handleErrors)
      .then(res => res.json())
      .then((json) => {
        dispatch(actions.editProfilesSucceeds(json.profile));
        return json.profile;
      })
      .catch(error => dispatch(actions.editProfileFails(error)));
  };
}
