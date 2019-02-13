import React from 'react';

const NewPasswordForm = props => (
  <div>


    <div className="container text-center bg-secondary">
      <div className="card-body px-lg-5 py-lg-5">
        <h1>Password Reset</h1>
        <div className="text-center mb-5">
   Please choose a new password to recover your
          {' '}
          <strong>authors haven </strong>
          {' '}
account.
        </div>

        <form onSubmit={props.onSubmit}>
          <div className="form-group mb-3">
            <div className="input-group input-group-alternative">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="ni ni-email-83" /></span>
              </div>
              <input type="password" className="form-control" id="user-pass-1" placeholder="new password" required />
            </div>
          </div>
          <div className="form-group mb-3">
            <div className="input-group input-group-alternative">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="ni ni-email-83" /></span>
              </div>
              <input type="password" className="form-control" id="user-pass-2" placeholder="re-enter new password" required />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary my-4">Change Password</button>
          </div>

        </form>
      </div>
    </div>
  </div>

);

export default NewPasswordForm;
