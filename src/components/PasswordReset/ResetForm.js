import React from 'react';

const ResetForm = props => (

  <div className="container text-center bg-secondary">
    <div className="card-body px-lg-5 py-lg-5">
      <h1>Password Reset</h1>
      <div className="text-center mb-5">
        Enter your Authors haven email address that you used to register.
        {' '}
        We will send you an email with a link to reset your password.
      </div>
      <form onSubmit={props.onSubmit}>
        <div className="form-group mb-3">
          <div className="input-group input-group-alternative">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="ni ni-email-83" /></span>
            </div>
            <input className="form-control" placeholder="Email" type="email" required />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn button-primary my-4">Request Link</button>
        </div>

      </form>
    </div>
  </div>


);

export default ResetForm;
