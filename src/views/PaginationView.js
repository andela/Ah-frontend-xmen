/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/Pagination/Pagination';
import fetchArticlesAction from '../actions/articleActions/fetchArticlesAction';

export class Paginations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumbers: [],
      allArticles: 7,
      currentPage: 1,
      totalPages: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.count && nextProps.count > 1) {
      if (nextProps.count > 6) {
        this.setState({
          allArticles: nextProps.count,
          totalPages: nextProps.count / 6,
        });
      } else {
        this.setState({ allArticles: nextProps.count, totalPages: 1 });
      }
    }
  }

  handleNext = (nextPageIndex) => {
    if (nextPageIndex < +this.state.totalPages && nextPageIndex >= 1) {
      this.props.fetchArticlesAction(nextPageIndex);
      this.setState({ currentPage: nextPageIndex });
    }
  };

  handlePrevious = () => {
    this.props.fetchArticlesAction(this.state.currentPage - 1);
  };

  render() {
    const { currentPage, totalPages } = this.state;
    let { pageNumbers } = this.state;
    pageNumbers = [];

    for (let i = 1; i <= totalPages; i += 1) {
      pageNumbers.push(i);
    }
    return (
      <Pagination
        pageNumbers={pageNumbers}
        nextPage={this.handleNext}
        previousPage={this.handlePrevious}
        currentPage={currentPage}
      />
    );
  }
}

export const mapStateToProps = state => ({
  newArticles: state.articles.articles,
  count: state.articles.allArticles,
});

export default connect(
  mapStateToProps,
  {
    fetchArticlesAction,
  },
)(Paginations);
