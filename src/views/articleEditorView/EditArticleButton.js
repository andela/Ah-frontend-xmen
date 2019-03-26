/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';


export class EditButton extends Component {
  render() {
    const decoded = jwt.decode(localStorage.getItem('token'));
    if (decoded) {
      const loggedUser = decoded.user_data.split(' ')[1];
      const hideButton = loggedUser === this.props.username;
      return (
        <div className="mr-2">
          <Link to={`/editor/${this.props.slug}`}>
            <i
              className="fas fa-pen"
              slug={this.props.slug}
              hidden={!hideButton}
              role="button"
              tabIndex="0"
              onKeyPress={() => {}}
              data-tip="Edit the Article"
            />
          </Link>
        </div>
      );
    }
    return null;
  }
}


const mapStateToProps = state => ({
  EditState: state.articleEditorReducer,
});

export default connect(mapStateToProps)(EditButton);
