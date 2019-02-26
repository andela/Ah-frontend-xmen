import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function

const ReportArticle = props => (
  <div>
    <div className="container edit-container">
      <h6 className="mt-5">Report the Article</h6>
      <form className="mt-2 mb-5" onSubmit={props.onSubmit}>
        <div>
          <textarea name="reason" className="form-control" rows="8" maxLength="360" placeholder="Reason for reporting this article..." onChange={props.onChange} />
        </div>
        <button type="submit" className="btn button-primary mt-3" id="formsubmit">Submit</button>
        <button type="submit" className="btn button-primary mt-3" id="formCancel" onClick={props.onClick}>Cancel</button>
      </form>
    </div>
  </div>
);

export default ReportArticle;
