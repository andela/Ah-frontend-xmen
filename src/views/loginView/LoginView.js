import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../../components/Login/loginForm';
import loginAction from '../../actions/loginActions/loginAction';
import SocialAuthView from '../socialAuthView/socialAuthView';


export class LoginView extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      localStorage.setItem('token', nextProps.token);
      setTimeout(() => window.location.reload('/'), 500);
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

  render() {
    const { errors } = this.props;
    const { isSuccessful } = this.props;
    return (
      <div>
        <p className="text-center">Sign in with</p>
        <SocialAuthView />
        <Login onSubmit={this.handleSubmit} errors={errors} isSuccessful={isSuccessful} />
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
