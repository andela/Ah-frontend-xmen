import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import SignupForm from '../components/auth/SignupForm';
import registerUser from '../actions/signupAction';


export class RegisterView extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signupState.isSuccessful) {
      this.handleSuccess(nextProps.signupState);
    }

    if (!nextProps.signupState.isSuccessful) {
      this.handleErrors(nextProps);
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { registerUser } = this.props;
    registerUser(this.state);
  }

  handleSuccess = (signupState) => {
    if (signupState.isSuccessful) {
      toast.success(
        <p className="text-white">
          { signupState.message}
        </p>,
      );
      setTimeout(() => window.location.reload(), 7000);
    }
  }

  handleErrors = (props) => {
    if (props.signupState.errors.email) {
      toast.error(
        <p className="text-white">
Email:
          {props.signupState.errors.email}
        </p>,
      );
    }
    if (props.signupState.errors.username) {
      toast.error(
        <p className="text-white">
Username:
          {props.signupState.errors.username}
        </p>,
      );
    }
    if (props.signupState.errors.password) {
      toast.error(
        <p className="text-white">
Password:
          {props.signupState.errors.password}
        </p>,
      );
    }
  }

  render() {
    return (
      <div>
        <SignupForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <ToastContainer autoClose={6000} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signupState: state.signUpReducer,
});

export default connect(mapStateToProps, { registerUser })(RegisterView);

