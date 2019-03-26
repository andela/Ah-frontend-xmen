/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const { onSubmit } = props;
  const { errors } = props;
  const { isSuccessful } = props;
  const emailError = errors ? errors.email : '';
  const passwordError = errors ? errors.password : '';
  const generalError = errors ? errors.error : '';
  const successMessage = isSuccessful ? 'Successfully logged in.' : '';

  return (
    <div className="card text-center mx-auto mt-4 border-0" id="loginCard">
      <div className="card-body text-center">
        <div className="row">
          <span className="col-md-5"><hr /></span>
          <span className="col-md-2 text-center text-muted">or</span>
          <span className="col-md-5"><hr /></span>
        </div>
        <form className="mt-0" onSubmit={onSubmit}>
          <div className="form-group mb-2">
            <div className="input-group input-group-alternative">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-user" /></span>
              </div>
              <input name="email" className="form-control" placeholder="Email or Username" type="text" />
            </div>
          </div>
          <div>
            <p className="text-danger">{emailError}</p>
          </div>
          <div className="form-group">
            <div className="input-group input-group-alternative">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-lock" /></span>
              </div>
              <input name="password" className="form-control" placeholder="Password" type="password" />
            </div>
          </div>
          <Link to="/password-reset"><p className="text-primary float-right">Forgot Password?</p></Link>
          <div>
            <p className="text-danger">{passwordError}</p>
          </div>
          <div>
            <button type="submit" className="btn btn-block button-primary my-4">Sign in</button>
          </div>
          <p>
            Don&#39;t have an account?&nbsp;
            <a href="#" onClick={props.onOpenSignup}>Sign up</a>
          </p>
          <div>
            <p className="text-danger">{generalError}</p>
            <p className="text-success">{successMessage}</p>
          </div>
        </form>
      </div>
    </div>
  );
};


Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.any,
    password: PropTypes.any,
    error: PropTypes.any,
  }),
};

Login.defaultProps = {
  errors: {},
};

export default Login;
