/* eslint-disable camelcase */
/* eslint-disable react/no-unused-prop-types */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';


function editOwnProfile() {
  window.location = '/profile/edit';
}

class Profile extends React.Component {
  state = {
    followers: this.props.profile.followers,
  }

  onClick = () => {
    if (this.props.is_following) {
      this.setState(prevState => ({ followers: prevState.followers - 1 }));
      this.props.onUnfollow();
    } else {
      this.props.onFollow();
      this.setState(prevState => ({ followers: prevState.followers + 1 }));
    }
  }

  render() {
    const {
      first_name, last_name, bio, following, username, image,
    } = this.props.profile;
    const buttonState = this.props.is_following ? 'Unfollow' : 'Follow';

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
            <div>
              <h3 className="mt-3 float-left">
                <Link to={`/profiles/${username}/followers`}>
                  Followers:
                  {' '}
                  {this.state.followers}
                </Link>
                &nbsp;
                <Link to={`/profiles/${username}/following`}>
                  Following:
                  {' '}
                  {following}
                </Link>
              </h3>
              <button type="button" className="btn btn-sm button-primary profile-follow shadow mt-3" onClick={this.onClick} hidden={this.props.isOwnProfile}>{buttonState}</button>
            </div>
            <p className="mt-4">
              {bio}
            </p>
            <button type="button" className="btn btn-sm button-primary" onClick={editOwnProfile} hidden={!this.props.isOwnProfile}>Edit Profile</button>
          </div>
        </div>
        <div className="tabs">
          <Tabs>
            <TabList>
              <Tab>Bookmarked Articles</Tab>
              <Tab>Favorite Articles</Tab>
            </TabList>
            <TabPanel>
              <ul className="list-group">
                {
                  this.props.bookmarks.length > 0
                    ? this.props.bookmarks.map(bookmark => (
                      <li key={bookmark.slug} className="list-group-item"><a href={`article/${bookmark.slug}`}>{bookmark.title}</a></li>
                    ))
                    : <li className="list-group-item">You have no bookmarked articles</li>}
              </ul>
            </TabPanel>
            <TabPanel>
              Favorite Articles appear here.
            </TabPanel>
          </Tabs>
        </div>
      </div>

    );
  }
}

Profile.defaultProps = {
  first_name: '',
  last_name: '',
  bio: '',
  followers: 0,
  following: 0,
  image: '',
};

export default Profile;
