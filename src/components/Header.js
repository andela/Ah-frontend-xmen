import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <NavLink to="/" exact>Home</NavLink>
     &nbsp;
    <NavLink to="/login" exact>Login</NavLink>
    <NavLink to="/editor" exact>Create an Article</NavLink>
    <NavLink to="/editor/:slug" exact>Edit an Article</NavLink>
  </div>
);

export default Header;
