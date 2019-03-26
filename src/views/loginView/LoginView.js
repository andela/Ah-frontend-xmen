import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../../components/Login/loginForm';
import loginAction from '../../actions/loginActions/loginAction';
import SocialAuthView from '../socialAuthView/socialAuthView';

const jwt = require('jsonwebtoken');

export class LoginView extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      localStorage.setItem('token', nextProps.token);
      const decoded = jwt.decode(nextProps.token);
      if (decoded) {
        const username = decoded.user_data.split(' ')[1];
        localStorage.setItem('username', username);
      }
      setTimeout(() => window.location.reload('/'), 100);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { loginAction } = this.props;
    const credentials = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
    loginAction(credentials);
  };

  openSignup = (e) => {
    this.props.onOpenSignup(e);
  }

  render() {
    const { errors } = this.props;
    const { isSuccessful } = this.props;
    return (
      <div>
        <h3 className="text-center text-primary mt-4">Sign in with</h3>
        <SocialAuthView />
        <Login
          onSubmit={this.handleSubmit}
          errors={errors}
          isSuccessful={isSuccessful}
          onOpenSignup={this.openSignup}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.loginReducer.token,
  errors: state.loginReducer.errors,
  isSuccessful: state.loginReducer.isSuccessful,
});

LoginView.propTypes = {
  token: PropTypes.string,
  errors: PropTypes.shape({
    email: PropTypes.any,
    password: PropTypes.any,
    error: PropTypes.any,
  }),

};

LoginView.defaultProps = {
  token: '',
  errors: {},
};

export default connect(mapStateToProps, { loginAction })(LoginView);
