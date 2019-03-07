import React, { Component } from 'react';
import { connect } from 'react-redux';
import profileListAction from '../actions/profileListAction';
import ProfileCard from '../components/follow/profileCard';
import followAction from '../actions/followActions/followAction';
import unfollowAction from '../actions/followActions/unfollowAction';
import followersListAction from '../actions/followActions/followerAction';
import followingListAction from '../actions/followActions/followingAction';

export class ProfileListView extends Component {
  state = {
    profiles: [],
  }

  componentWillMount = () => {
    const user = this.props.match.params.username;
    if (this.props.match.path === '/profiles/:username/following') {
      this.props.followingListAction(user);
    } else if (this.props.match.path === '/profiles/:username/followers') {
      this.props.followersListAction(user);
    } else {
      this.props.profileListAction();
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ profiles: nextProps.profiles });
    if (nextProps.followState.message) {
      const { message } = nextProps.followState;
      const username = message.split(' ').pop();
      let { profiles } = this.state;
      profiles = profiles.filter((profile) => {
        if (profile.username === username) {
          profile.is_following = !profile.is_following;
        }
        return profile;
      });
    }
  }

  handleFollow = (event) => {
    const follow = event.target.id;
    this.props.followAction(follow);
  }

  handleUnfollow = (event) => {
    const unfollow = event.target.id;
    this.props.unfollowAction(unfollow);
  }

  render() {
    const { profiles } = this.state;

    return (
      <div className="container mt-5">
        {profiles.map((profile, index) => <ProfileCard key={index} profile={profile} onFollow={this.handleFollow} onUnfollow={this.handleUnfollow} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profiles: state.profileListReducer.profiles,
  followState: state.followReducer.profile,
});

export default connect(mapStateToProps,
  {
    profileListAction, followAction, unfollowAction, followersListAction, followingListAction,
  })(ProfileListView);
