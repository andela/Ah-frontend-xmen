/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { DeleteArticle } from '../../actions/articleActions/articleEditorActions';


export class DeleteButton extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isArticleDeleted) {
      setTimeout(() => this.props.history.push('/'), 100);
    }
  }

  handleDelete(event) {
    event.preventDefault();
    const confirmDelete = confirm('Are you sure you want to delete?');
    if (confirmDelete) {
      this.props.DeleteArticle(this.props.slug);
    }
  }

  render() {
    const decoded = jwt.decode(localStorage.getItem('token'));
    if (decoded) {
      const loggedUser = decoded.user_data.split(' ')[1];
      const hideButton = loggedUser === this.props.username;
      return (
        <div className="float-left">
          <i
            className="fas fa-trash-alt"
            slug={this.props.slug}
            onClick={this.handleDelete}
            role="button"
            tabIndex="0"
            onKeyPress={() => {}}
            hidden={!hideButton}
          />
        </div>
      );
    }
    return null;
  }
}


const mapStateToProps = state => ({
  isArticleDeleted: state.articleEditorReducer.isArticleDeleted,
});

export default withRouter(connect(mapStateToProps, { DeleteArticle })(DeleteButton));
