import React from 'react';


const message = props => (

  <div className="container text-center bg-secondary">
    <div className="card-body px-lg-5 py-lg-5">
      <h1>Password Reset</h1>
      <div className="text-center mb-5">
        {props.message}
      </div>

      <div className="col-md-4 text-center">
        <div className="text-center text-primary">
          {props.title}
        </div>
        <div className="tect-muted" />
      </div>

    </div>
  </div>


);

export default message;
