import React from 'react';
import { connect } from 'react-redux';
import fetchProfile from '../actions/ProfileActions';
import Profile from '../components/Profile';
import bookmarkListing from '../actions/bookmarkListAction';
import followAction from '../actions/followActions/followAction';
import unfollowAction from '../actions/followActions/unfollowAction';

export class ProfileView extends React.Component {
  constructor(props, { match }) {
    super(props, { match });
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      is_following: false,
    };
  }

  componentDidMount() {
    this.props.getProfiles(this.props.match.params.username);
    const { bookmarkListing } = this.props;
    bookmarkListing();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      is_following: nextProps.profile.is_following,
    });
    if (nextProps.followState !== undefined) {
      this.setState({ is_following: nextProps.followState });
    }
  }

  handleFollow = () => {
    this.props.followAction(this.props.match.params.username);
  }

  handleUnfollow = () => {
    this.props.unfollowAction(this.props.match.params.username);
    this.props.fetchProfile();
    const { bookmarkListing } = this.props;
    bookmarkListing();
  }

  render() {
    if (this.props.error) {
      return (
        <div className="errormsg card">
          {' '}
    Error!
          {' '}
          {this.props.error.message}
&nbsp;
    Please Login
        </div>
      );
    }
    if (this.props.loading) {
      return <div className="loadingmsg card">Loading...</div>;
    }
    const ownUsername = localStorage.getItem('username');
    const paramUsername = this.props.match.params.username || ownUsername;
    const isOwnProfile = ownUsername === paramUsername;
    return (
      <div>
        <Profile
          profile={this.props.profile}
          isOwnProfile={isOwnProfile}
          bookmarks={this.props.bookmarks}
          is_following={this.state.is_following}
          onFollow={this.handleFollow}
          onUnfollow={this.handleUnfollow}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
  loading: state.profileReducer.loading,
  error: state.profileReducer.error,
  bookmarks: state.bookmarkListReducer.bookmarks,
  followState: state.followReducer.isFollowing,
});

const mapDispatchToProps = dispatch => ({
  getProfiles: (username) => {
    dispatch(fetchProfile(username));
  },
  bookmarkListing,
  followAction: (username) => {
    dispatch(followAction(username));
  },
  unfollowAction: (username) => {
    dispatch(unfollowAction(username));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
