/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RegisterModal from '../auth/RegisterModal';
import LoginModal from '../Login/loginModal';
import getAuthUserDetails from '../../actions/authAction';

import notificationsAction from '../../actions/notificationsAction';
import NotificationsDropdownMenu, { UserDropdownMenu } from './notifications';


export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      notificationMenuActive: '',
      userMenuActive: '',
      isShowing: false,
    };
  }

  componentWillMount = () => {
    this.props.getAuthUserDetails();
    this.props.getNotifications(false);
    // openLoginModal: false,
  };

  onOpenLoginModal = () => {
    this.setState({ openLoginModal: true });
    if (this.state.open) {
      this.setState({ open: false });
    }
  };

  onCloseLoginModal = () => {
    this.setState({ openLoginModal: false });
  };

  onModalOpen = (event) => {
    event.preventDefault();
    this.setState({ open: true });
  };

  onModalClose = (event) => {
    event.preventDefault();
    this.setState({ open: false });
    return <Redirect to="/" />;
  };


  logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('slug');
    localStorage.removeItem('username');
    localStorage.removeItem('users');
    window.location = '/';
  };

  markAsRead = (actionLink) => {
    this.props.markAsRead(true);
    this.setState({
      notificationMenuActive: '',
      userMenuActive: '',
      isShowing: false,
    });
    this.props.history.push(actionLink);
  }

  handleNotificationDropdown = () => {
    if (this.state.isShowing === false) {
      this.setState({
        notificationMenuActive: 'active',
        userMenuActive: '',
        isShowing: true,
      });
    } else {
      this.setState({
        notificationMenuActive: '',
        userMenuActive: '',
        isShowing: false,
      });
    }
  };

  handleDropdown = () => {
    if (this.state.isShowing === false) {
      this.setState({
        userMenuActive: 'active',
        notificationMenuActive: '',
        isShowing: true,
      });
    } else {
      this.setState({
        userMenuActive: '',
        notificationMenuActive: '',
        isShowing: false,
      });
    }
  };

  render() {
    // const { open } = this.state;
    const bellClassName = this.props.hasUnread ? 'fas' : 'far';
    const userLinks = (

      <div className="material-dropdown">
        <i id="nd-click" onClick={this.handleNotificationDropdown} className={`${bellClassName} fa-bell fa-lg float-left `} />
        <div
          id="dd-click"
          className="dd-click"
          onClick={this.handleDropdown}
          role="button"
          tabIndex="0"
        >
          <i className="fas fa-sort-down float-right mt-2" />
          <p className="mt-2 float-right mr-2">{this.props.auth.username}</p>
          <img
            src={
              !this.props.auth.image
                ? 'https://res.cloudinary.com/soultech/image/upload/v1550685426/authors%20haven%20pics/avatar.png'
                : this.props.auth.image
            }
            className="img-profile float-right mr-2 shadow"
            alt=""
          />
        </div>
        {
          this.state.notificationMenuActive
            ? (
              <NotificationsDropdownMenu
                markAsRead={this.markAsRead}
                notifications={this.props.Notifications}
                active={this.state.notificationMenuActive}
              />
            )
            : (
              <UserDropdownMenu
                active={this.state.userMenuActive}
                logOut={this.logOut}
              />
            )
        }

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

    const { open, openLoginModal } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg shadow navbar-dark">
          <div className="container">
            <Link to="/" className="float-left">
              <img
                src="https://res.cloudinary.com/soultech/image/upload/v1550685433/authors%20haven%20pics/logo4authorsHaven1.png"
                alt=""
              />
            </Link>
            <div className="float-right">
              {this.props.auth.IsAuth ? userLinks : guestLinks}
            </div>
          </div>
        </nav>
        <LoginModal
          open={openLoginModal}
          onClose={this.onCloseLoginModal}
          onOpenSignup={this.onModalOpen}
        />
        <RegisterModal
          open={open}
          onModalClose={this.onModalClose}
          onLoginTrigger={this.onOpenLoginModal}
        />
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    auth: state.Auth,
    Notifications: state.notificationsReducer.notifications,
    hasUnread: state.notificationsReducer.hasUnread,
  };
}

export default withRouter(connect(
  mapStateToProps,
  {
    getAuthUserDetails,
    getNotifications: notificationsAction,
    markAsRead: notificationsAction,
  },
)(Header));
