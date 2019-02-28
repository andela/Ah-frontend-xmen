/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import editProfile from '../actions/EditProfileAction';
import UpdateProfile from '../components/UpdateProfile';
import getProfile from '../actions/ProfileActions';
import authHoc from '../hoc/authHoc';

export class UpdateView extends Component {
  constructor(props) {
    const User = JSON.parse(localStorage.getItem('users'));
    const firstName = User[0].first_name;
    const lastName = User[0].last_name;
    const Bio = User[0].bio;

    super(props);
    this.state = {
      first_name: firstName,
      last_name: lastName,
      bio: Bio,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.getProfile();
    }
  }

  componentDidUpdate() {
    this.props.getProfile();
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { history } = this.props;
    e.preventDefault();
    this.props.editProfile(this.state);
    history.push('/profile');
  }

  render() {
    return (
      <div>
        <UpdateProfile
          onSubmit={this.handleSubmit}
          onChange={this.handleInput}
          profile={this.state}
        />
      </div>
    );
  }
}

UpdateView.propTypes = {
  editProfile: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};


const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
  loading: state.profileReducer.loading,
  error: state.profileReducer.error,
});

export default authHoc(connect(mapStateToProps, { editProfile, getProfile })(UpdateView));
