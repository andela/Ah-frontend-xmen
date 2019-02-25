/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { history } = this.props;
    e.preventDefault();
    this.props.reportArticleAction(this.state);
    history.push('/article');
  }

  render() {
    return (
      <div>
        <ReportArticle
          onSubmit={this.handleSubmit}
          onChange={this.handleInput}
          report={this.state}
        />
      </div>
    );
  }
}

ReportArticleView.propTypes = {
  reportArticleAction: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};


// const mapStateToProps = state => ({
//   reason: state.reportReducer.reason,
//   error: state.reportReducer.error,
// }
// );


export default ReportArticleView;
