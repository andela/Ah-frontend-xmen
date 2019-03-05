/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import SocialAuthButtons from '../../views/socialAuthView/socialAuthView';

const SignupForm = props => (
  <div className="card-body px-lg-3  py-lg-3">
    <div className="text-center">
      <h3 className="text-primary">Signup with</h3>
      <SocialAuthButtons onSuccess={props.onSuccess} />
    </div>
    <div className="row p-3">
      <span className="col-md-5"><hr /></span>
      <span className="col-md-2 text-center">or</span>
      <span className="col-md-5"><hr /></span>
    </div>
    <form onSubmit={props.onSubmit} id="signup-form">
      <div className="form-group mb-3">
        <div className="input-group input-group-alternative">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-envelope" /></span>
          </div>
          <input className="form-control" required onChange={props.onChange} placeholder="Email" type="email" id="email" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group input-group-alternative">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-user" /></span>
          </div>
          <input className="form-control" required onChange={props.onChange} placeholder="Username" type="text" id="username" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group input-group-alternative">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-lock" /></span>
          </div>
          <input className="form-control" required onChange={props.onChange} id="password" placeholder="Password" type="password" />
        </div>
      </div>
      <div className="text-center">
        <input type="submit" className="btn btn-block button-primary my-4" value="Sign Up" />
      </div>
      <div className="text-center">
Already have an account,
        <a href="#" onClick={props.onLoginTrigger}> Login</a>

      </div>
    </form>
  </div>
);


export default SignupForm;
