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
    this.props.getProfiles();
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
    return (
      <div>
        <Profile profile={this.props.profile} />
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
  getProfiles: () => {
    dispatch(fetchProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
