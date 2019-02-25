import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function

const ReportArticle = () => (
  <div>
    <div className="container edit-container">
      <h5 className="mt-5">Report the Article</h5>
      <form className="mt-2 mb-5" onSubmit="#">
        <div>
          <textarea name="bio" className="form-control" rows="8" maxLength="360">Reason for reporting this article...</textarea>
        </div>
        <button type="submit" className="btn button-primary mt-3" id="formsubmit">Submit</button>
      </form>
    </div>
  </div>
);

export default ReportArticle;
