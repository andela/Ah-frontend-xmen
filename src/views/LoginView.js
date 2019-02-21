import React from 'react';
import Login from '../components/Login';
import SocialAuthView from './socialAuthView/socialAuthView';

const LoginView = props => (
  <div>
    <SocialAuthView />
    <Login />

  </div>
);

export default LoginView;
