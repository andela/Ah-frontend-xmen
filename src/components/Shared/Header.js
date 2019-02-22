import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RegisterModal from '../auth/RegisterModal';

class Header extends Component {
  state = {
    open: false,
  }

  onModalOpen = (event) => {
    event.preventDefault();
    this.setState({ open: true });
  }

  onModalClose = (event) => {
    event.preventDefault();
    this.setState({ open: false });
    return <Redirect to="/" />;
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg shadow navbar-dark">
          <div className="container">
            <Link to="/"><img src="https://res.cloudinary.com/soultech/image/upload/v1550685433/authors%20haven%20pics/logo4authorsHaven1.png" alt="" /></Link>
            <button type="submit" id="modalOpener" onClick={this.onModalOpen} className="btn login-nav button-primary">Get Started</button>
          </div>
        </nav>
        <RegisterModal open={open} onModalClose={this.onModalClose} />
      </div>
    );
  }
}

export default Header;
