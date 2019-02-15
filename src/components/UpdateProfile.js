import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class UpdateProfile extends Component {
  render() {
    const { onSubmit, onChange, profile } = this.props;
    return (
      <div>
        <div className="container edit-container">
          <h5 className="mt-5">Edit Profile</h5>
          <form onSubmit={onSubmit} className="mt-2 mb-5">
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="first_name" placeholder="Your name.." value={profile.first_name} onChange={onChange} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="lname" id="lname">Last Name</label>
              <input type="text" id="lname" name="last_name" placeholder="Your last name.." value={profile.last_name} onChange={onChange} className="form-control" />
            </div>
            <div>
              <label htmlFor="bio">Bio</label>
              <textarea name="bio" className="form-control" value={profile.bio} onChange={onChange} rows="5" maxLength="360">Your Bio</textarea>
            </div>
            <button type="submit" className="btn button-primary mt-3" id="formsubmit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

UpdateProfile.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default UpdateProfile;
