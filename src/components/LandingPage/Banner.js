import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import RegisterModal from '../auth/RegisterModal';

class Banner extends Component {
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
        <section className="section box-flex">
          <div className="welcome">
            <div className="introduction">
              <h1>A Social platform for the creative at heart</h1>
              <p className="intro-text">
          Create a community of like minded authors to foster inspiration and
          innovation by leveraging the modern web.
              </p>
              <div className="mt-4 p-0 float-left">
                <button type="submit" id="modalLauncher" onClick={this.onModalOpen} className="btn button-primary mr-3">Get Started</button>
                <button type="submit" className="btn ml-2">Login</button>
              </div>
            </div>
          </div>
        </section>
        <RegisterModal open={open} onModalClose={this.onModalClose} />
      </div>
    );
  }
}

export default Banner;
