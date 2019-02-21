import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ResetForm from '../components/PasswordReset/ResetForm';
import passwordResetAction from '../actions/PasswordResetAction';
import passwordChangeAction from '../actions/PasswordChangeAction';
import NewPasswordForm from '../components/PasswordReset/NewPasswordFrom';
import Message from '../components/PasswordReset/Message';

export class PasswordResetView extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
  }

    handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      this.props.passwordResetAction(email);

      this.props.passwordResetReducer.errors = undefined;
    }

    handlePasswordSubmit = (e) => {
      e.preventDefault();
      const password = e.target[0].value;
      const { token } = this.props.match.params;
      this.props.passwordChangeAction(password, token);
      this.props.passwordResetReducer.errors = undefined;
    }

    render() {
      if (this.props.passwordResetReducer.message !== undefined) {
        return (<div className="mt-5 pt-5 message-box "><Message message={this.props.passwordResetReducer.message} /></div>);
      }

      if (this.props.match.params.token === 'invalid-token') {
        return (<div className="mt-5 pt-5 message-box"><Message message="Sorry the link you followed is expired. Please request a new one." /></div>);
      }

      if (this.props.match.params.token !== undefined) {
        return (
          <div className="mt-5 mb-5  pt-5">
            <NewPasswordForm onSubmit={this.handlePasswordSubmit} />

          </div>
        );
      }

      return (
        <div className="mt-5 mb-5 pt-5">

          {/* <small>{this.props.passwordResetReducer.errors}</small> */}
          <ResetForm onSubmit={this.handleSubmit} />
          <ToastContainer />
        </div>
      );
    }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps,
  {
    passwordResetAction,
    passwordChangeAction,
  })(PasswordResetView);
