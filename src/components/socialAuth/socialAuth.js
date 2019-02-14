import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';


const socialAuthButtons = props => (
  <div id="social-button">
    <p className="text-dark">Login with Social</p>

    <FacebookLogin
      appId={process.env.appId}
      fields="name,email,picture"
      callback={props.responseFacebook}
      cssClass="btn btn-primary mr-2 facebook-btn"
      textButton={<i className="fab fa-2x fa-facebook-f" />}
      icon={false}
    />

    <GoogleLogin
      clientId={process.env.clientId}
      onSuccess={props.googleResponseSuccess}
      onFailure={props.googleResponseFailure}
      icon={false}
      className="google-btn btn btn-primary"
      buttonText={<i className="fab fa-2x fa-google" />}
    />


  </div>
);

socialAuthButtons.prototype = {
  responseFacebook: PropTypes.func.isRequired,
  googleResponseSuccess: PropTypes.func.isRequired,
  googleResponseFailure: PropTypes.func.isRequired,
};
export default socialAuthButtons;
