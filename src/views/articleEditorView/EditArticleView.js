import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Editor from '../../components/Articles/ArticleEditor';
import { EditArticle } from '../../actions/articleActions/articleEditorActions';
import getSingleArticle from '../../actions/articleActions/getSingleArticle';

export class EditArticleView extends Component {
  constructor() {
    const fetchedArticle = JSON.parse(localStorage.getItem('article'));
    super();
    this.state = {
      title: fetchedArticle.title,
      description: fetchedArticle.description,
      body: fetchedArticle.body,
      tags: fetchedArticle.tags,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.slug) {
      this.props.getSingleArticle(this.props.match.params.slug);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isEditSuccessful) {
      this.handleErrors(nextProps);
    }

    if (nextProps.isEditSuccessful) {
      this.props.history.push(`/article/${nextProps.match.params.slug}`);
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
    this.props.EditArticle(this.props.match.params.slug, payload);
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
          slug={this.props.slug}
        />
        <ToastContainer />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  errors: state.articleEditorReducer.errors,
  isEditSuccessful: state.articleEditorReducer.isEditSuccessful,
});

export default connect(mapStateToProps, { getSingleArticle, EditArticle })(EditArticleView);
