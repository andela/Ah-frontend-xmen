import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/Pagination/Pagination';
import {
  fetchArticlesAction,
  getAllArticlesAction,
} from '../actions/articleActions/fetchArticlesAction';

class Paginations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumbers: [],
      allArticles: 7,
      currentPage: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.count && nextProps.count > 1) {
      console.log(nextProps.count);

      this.setState({ allArticles: nextProps.count });
    }
  }

  handleNext = (nextPageIndex) => {
    this.props.getAllArticlesAction(nextPageIndex);
    this.setState({ currentPage: nextPageIndex });
  };

  handlePrevious = () => {
    this.props.getAllArticlesAction(this.state.currentPage - 1);
  };

  render() {
    const { allArticles, currentPage } = this.state;
    let { pageNumbers } = this.state;
    pageNumbers = [];
    let totalPages;
    if (allArticles > 6) {
      totalPages = allArticles / 6;
    }

    for (let i = 1; i <= totalPages; i++) {
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
    getAllArticlesAction,
  },
)(Paginations);
