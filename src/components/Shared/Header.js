/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import RegisterModal from '../auth/RegisterModal';
import getAuthUserDetails from '../../actions/authAction';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      active: '',
      isShowing: false,
    };
  }

  componentWillMount = () => {
    this.props.getAuthUserDetails();
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

  logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('slug');
    localStorage.removeItem('username');
    localStorage.removeItem('users');
    window.location = '/';
  };

  handleDropdown = () => {
    if (this.state.isShowing === false) {
      this.setState({
        active: 'active',
        isShowing: true,
      });
    } else {
      this.setState({
        active: '',
        isShowing: false,
      });
    }
  };

  render() {
    const { open } = this.state;

    const userLinks = (
      <div className="material-dropdown">
        <div
          id="dd-click"
          className="dd-click"
          onClick={this.handleDropdown}
          onKeyPress=""
          role="button"
          tabIndex="0"
        >
          <i
            className="fas fa-sort-down float-right mt-2"
          />
          <p
            className="mt-2 float-right mr-2"
          >
            {this.props.auth.username}
          </p>
          <img
            src={
              !this.props.auth.image
                ? 'https://res.cloudinary.com/soultech/image/upload/v1550685426/authors%20haven%20pics/avatar.png'
                : this.props.auth.image
            }
            className="img-profile float-right mr-2"
            alt=""
          />
        </div>
        <ul className={`dropdown ${this.state.active}`}>
          <li><a href="/editor">Create an Article</a></li>
          <li><a href="/profile">My Profile</a></li>
          <li>
            <a
              id="logout"
              onClick={this.logOut}
              onKeyPress=""
              role="button"
              tabIndex="0"
            >
            Log out
            </a>
          </li>
        </ul>
      </div>
    );

    const guestLinks = (
      <button
        type="submit"
        id="modalOpener"
        onClick={this.onModalOpen}
        className="btn login-nav button-primary"
      >
        Get Started
      </button>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-lg shadow navbar-dark">
          <div className="container">
            <a href="/" className="float-left">
              <img
                src="https://res.cloudinary.com/soultech/image/upload/v1550685433/authors%20haven%20pics/logo4authorsHaven1.png"
                alt=""
              />
            </a>
            <div className="float-right">
              {this.props.auth.IsAuth ? userLinks : guestLinks}
            </div>
          </div>
        </nav>
        <RegisterModal open={open} onModalClose={this.onModalClose} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.Auth,
  };
}

export default connect(
  mapStateToProps,
  { getAuthUserDetails },
)(Header);
