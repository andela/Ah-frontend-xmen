import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <NavLink to="/" exact>Home</NavLink>
     &nbsp;
    <NavLink to="/login" exact>Login</NavLink>
  </div>
);

export default Header;
