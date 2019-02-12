import React from 'react';

const Login = () => (
  <form style={{ padding: '43px' }}>
    <label htmlFor="username">
          Username:
      <input type="text" id="username" placeholder="Username" />
    </label>
    <br />
    <label htmlFor="password">
          Password:
      <input type="text" id="password" placeholder="Password" />
    </label>
    <br />
    <input type="submit" value="Login" />
  </form>
);

export default Login;
