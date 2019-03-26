import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import RegisterModal from '../auth/RegisterModal';
import LoginModal from '../Login/loginModal';
import getAuthUserDetails from '../../actions/authAction';
import TagListView from '../../views/TagsView';

export class Banner extends Component {
  state = {
    open: false,
    openLoginModal: false,
  }


  onModalOpen = (event) => {
    event.preventDefault();
    this.setState({ open: true });
    if (this.state.openLoginModal) {
      this.setState({ openLoginModal: false });
    }
  }

  onModalClose = (event) => {
    event.preventDefault();
    this.setState({ open: false });
    return <Redirect to="/" />;
  }

onOpenLoginModal = () => {
  this.setState({ openLoginModal: true });
  if (this.state.open) {
    this.setState({ open: false });
  }
};

onCloseLoginModal = () => {
  this.setState({ openLoginModal: false });
};

render() {
  const { open, openLoginModal } = this.state;

  const guestBanner = (
    <section className="section box-flex">
      <div className="container welcome">
        <div className="introduction">
          <h1>A Social platform for the creative at heart</h1>
          <p>
        Create a community of like minded authors to foster inspiration and
        innovation by leveraging the modern web.
          </p>
          <div className="mt-4 p-0 float-left">
            <button type="submit" id="modalLauncher" onClick={this.onModalOpen} className="btn button-primary mr-3">Get Started</button>
            <button type="button" onClick={this.onOpenLoginModal} className="btn ml-2 login-banner">Login</button>
            <LoginModal
              open={openLoginModal}
              onOpenSignup={this.onModalOpen}
              onClose={this.onCloseLoginModal}
            />
          </div>
        </div>
      </div>
    </section>
  );

  const userBanner = (
    <section className="sections">
      <div className="container welcome-head">
        <div className="introduction mt-5">
          <h1>Welcome to Authors Haven</h1>
          <div className="mt-4 p-0 float-left">
            <a href="/editor" className="btn button-primary btn-success">Create an article</a>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div>
      {this.props.auth.IsAuth ? userBanner : guestBanner}
      <TagListView />
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
  };
}

export default connect(
  mapStateToProps,
  { getAuthUserDetails },
)(Banner);
