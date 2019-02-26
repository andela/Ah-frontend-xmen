/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import fetchProfile from '../actions/ProfileActions';
import Profile from '../components/Profile';

export class ProfileView extends React.Component {
  constructor(props, { match }) {
    super(props, { match });
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.getProfiles(this.props.match.params.username);
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
        <Profile profile={this.props.profile} isOwnProfile={isOwnProfile} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
  loading: state.profileReducer.loading,
  error: state.profileReducer.error,
});


const mapDispatchToProps = dispatch => ({
  getProfiles: (username) => {
    dispatch(fetchProfile(username));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
