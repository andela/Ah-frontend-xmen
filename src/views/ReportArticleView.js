/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import ReportArticle from '../components/Articles/ReportArticle';
import reportArticleAction from '../actions/articleActions/reportArticleAction';


export class ReportArticleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.reason === '') {
      toast.error('Please add a reason');
    } else {
      this.props.reportArticleAction(this.state);
      toast.success('Article Successfully Reported , Shall be reviewed');
      const slug = localStorage.getItem('slug');
      setTimeout(() => {
        window.location.href = `/article/${slug}`;
      }, 3000);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  handleCancel() {
    const slug = localStorage.getItem('slug');
    window.location.assign(`/article/${slug}`);
  }

  render() {
    return (
      <div>
        <ReportArticle
          onSubmit={this.handleSubmit}
          onChange={this.handleInput}
          onClick={this.handleCancel}
          report={this.state}
        />
        <ToastContainer />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  reason: state.reportReducer.reason,
  error: state.reportReducer.error,
}
);

export default connect(mapStateToProps, { reportArticleAction })(ReportArticleView);
