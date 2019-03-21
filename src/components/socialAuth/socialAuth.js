import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';


const socialAuthButtons = props => (
  <div id="social-button" className="text-center pt-2">

    <FacebookLogin
      appId={process.env.appId}
      fields="name,email,picture"
      callback={props.responseFacebook}
      cssClass=" mr-2 facebook-btn bg-primary"
      textButton={<i className="fab fa-facebook-f " />}
      icon={false}
    />

    <GoogleLogin
      clientId={process.env.clientId}
      onSuccess={props.googleResponseSuccess}
      onFailure={props.googleResponseFailure}
      icon={false}
      className="google-btn"
      buttonText={<img alt="" src="https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png" />}
    />


  </div>
);

socialAuthButtons.prototype = {
  responseFacebook: PropTypes.func.isRequired,
  googleResponseSuccess: PropTypes.func.isRequired,
  googleResponseFailure: PropTypes.func.isRequired,
};
export default socialAuthButtons;
