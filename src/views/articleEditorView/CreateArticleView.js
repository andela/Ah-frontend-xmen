import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Editor from '../../components/Articles/ArticleEditor';
import { CreateArticle } from '../../actions/articleActions/articleEditorActions';
import authHoc from '../../hoc/authHoc';

export class CreateArticleView extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      body: '',
      tags: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isSuccessful) {
      this.handleErrors(nextProps);
    } else {
      setTimeout(() => this.props.history.push(`/article/${nextProps.article.slug}`), 100);
    }
  }

  handleErrors = (props) => {
    if (props.errors.title) {
      toast.error(
        <p className="text-white">
        Title:  &nbsp;
          { props.errors.title[0] }
        </p>,
      );
    }
    if (props.errors.description) {
      toast.error(
        <p className="text-white">
        Description: &nbsp;
          { props.errors.description[0] }
        </p>,
      );
    }
    if (props.errors.body) {
      toast.error(
        <p className="text-white">
        Body: &nbsp;
          { props.errors.body[0] }
        </p>,
      );
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const payload = {
      title: event.target[0].value,
      description: event.target[1].value,
      body: this.state.body,
      tags: this.state.tags,
    };
    this.props.CreateArticle(payload);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChange(tags) {
    this.setState({ tags });
  }

  handleBodyChange(value) {
    this.setState({ body: value });
  }

  render() {
    return (
      <div>
        <Editor
          {...this.state}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          onInputChange={this.handleInput}
          onBodyChange={this.handleBodyChange}
        />
        <ToastContainer />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  isSuccessful: state.articleEditorReducer.isSuccessful,
  errors: state.articleEditorReducer.errors,
  article: state.articleEditorReducer.article,
});

export default authHoc(connect(mapStateToProps, { CreateArticle })(CreateArticleView));
