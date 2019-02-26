/* eslint-disable camelcase */
/* eslint-disable react/no-unused-prop-types */

import React from 'react';
import PropTypes from 'prop-types';


function editOwnProfile() {
  window.location = 'profile/edit';
}

function Profile(props) {
  const {
    first_name, last_name, bio, followers, following, username, image,
  } = props.profile;

  return (

    <div className="container wrapper">
      <div className="profile-info mb-5">
        <div className="">
          <img
            alt=""
            src={
              !image
                ? 'https://res.cloudinary.com/soultech/image/upload/v1550685426/authors%20haven%20pics/avatar.png'
                : image
            }
            className="rounded-circle dp"
          />
        </div>
        <div className="profile-text">
          <h1>
            {!first_name ? (
              <div>
                {' '}
                <h1 id="username">{username}</h1>
                {' '}
              </div>
            ) : first_name}
&nbsp;
            {last_name}
          </h1>
          <h3 className="mt-3">
Followers:
            {' '}
            {followers}
            &nbsp;
Following:
            {' '}
            {following}
          </h3>
          <p className="mt-4">
            {bio}
          </p>
          <button type="button" className="btn button-primary" onClick={editOwnProfile} hidden={!props.isOwnProfile}>Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
Profile.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  bio: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
  image: PropTypes.string,

};
Profile.defaultProps = {
  first_name: '',
  last_name: '',
  bio: '',
  followers: 0,
  following: 0,
  image: '',
};
export default Profile;
