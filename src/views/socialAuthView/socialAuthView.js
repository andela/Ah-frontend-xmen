import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import SocialAuth from '../../components/socialAuth/socialAuth';
import googleSignInAction from '../../actions/socialActions/googleAction';
import facebookSignInAction from '../../actions/socialActions/facebookAction';


export class SocialAuthView extends Component {
  componentWillReceiveProps(nextprops) {
    if (nextprops.socialAuthState.isAuthenticated) {
      localStorage.setItem('token', nextprops.socialAuthState.token);
      localStorage.setItem('username', nextprops.socialAuthState.payload.user.username);
      setTimeout(() => {
        this.props.history.push('/');
      }, 800);
      toast.success(`Successully Logged in as ${nextprops.socialAuthState.payload.user.username}`);
    } else {
      toast.error('!Oops An Error occurred Please Try Again Later');
    }
  }

    handleFacebookReponse=(response) => {
      const { facebookSignInAction } = this.props;
      if (response.accessToken) {
        facebookSignInAction(response.accessToken);
      }
    }

    handleGoogleResponseSuccess=(response) => {
      
      const { googleSignInAction } = this.props;
      if (response.tokenId) {
        googleSignInAction(response.tokenId);
      }
    }

    handlegoogleResponseFailure=(response) => {
      toast.error(response.error);
      const { googleSignInAction } = this.props;
      googleSignInAction('invalid request');
    }


    render() {
      return (
        <div>
          <ToastContainer />
          <SocialAuth
            id="socialAuth"
            responseFacebook={this.handleFacebookReponse}
            googleResponseSuccess={this.handleGoogleResponseSuccess}
            googleResponseFailure={this.handlegoogleResponseFailure}
          />
        </div>

      );
    }
}

export const mapStateToProps = state => ({
  socialAuthState: state.socialAuthReducer,
});

export default withRouter(connect(mapStateToProps,
  { googleSignInAction, facebookSignInAction })(SocialAuthView));
