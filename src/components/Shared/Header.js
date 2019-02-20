import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (

  <nav className="navbar navbar-expand-lg shadow navbar-dark">
    <div className="container">
      <Link to="/"><img src="https://res.cloudinary.com/soultech/image/upload/v1550685433/authors%20haven%20pics/logo4authorsHaven1.png" alt="" /></Link>
      <button type="submit" className="btn login-nav button-primary">Login</button>
    </div>
  </nav>
);

export default Header;
