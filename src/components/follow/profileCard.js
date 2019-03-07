import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = (props) => {
  const { profile, onFollow, onUnfollow } = props;
  const followState = profile.is_following;
  const buttonState = followState ? 'Following' : 'Follow';
  const onClick = followState ? onUnfollow : onFollow;
  const loggedInUsername = localStorage.getItem('username');
  const isOwnProfile = (loggedInUsername === profile.username);

  return (
    <div className="card card-details">
      <div className="card-body row">
        <div className="col-md-2">
          <img
            alt=""
            src={!profile.image ? 'https://res.cloudinary.com/soultech/image/upload/v1550685426/authors%20haven%20pics/avatar.png' : profile.image}
            className="image-profile"
          />
        </div>
        <div className="col-md-8">
          <Link to={`/profiles/${profile.username}`}>
            <h5>
              {!profile.first_name ? (
                <div>
                  {' '}
                  <h5 id="username">{profile.username}</h5>
                  {' '}
                </div>
              ) : profile.first_name}
              &nbsp;
              {profile.last_name}
            </h5>
          </Link>
          <p>{profile.bio}</p>
        </div>
        <div className="col-md-2">
          <button type="button" id={profile.username} className="btn button-primary" onClick={onClick} hidden={isOwnProfile}>{buttonState}</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
