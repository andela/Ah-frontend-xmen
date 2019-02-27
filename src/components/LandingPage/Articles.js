import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ArticleCard } from './ArticleCard';
import { fetchArticlesAction } from '../../actions/articleActions/fetchArticlesAction';
import Paginations from '../../views/Paginations';

export class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentWillMount = () => {
    this.props.fetchArticlesAction();
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ articles: nextProps.articles });
    console.log('$$$$$$$$$$$$$$', nextProps);
  }

  updateArticles = (newArticles) => {
    this.setState({ articles: newArticles });
  };

  render() {
    const { articles } = this.state;
    const articleItems = articles.map((article, index) => {
      if (!article.image) {
        article.image = `http://loremflickr.com/700/430?random=${index}`;
      }
      return <ArticleCard key={article.slug} {...article} />;
    });

    return (
      <div>
        <section className="section-lg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="bar">
                  <h4 className="article-header">Latest Articles</h4>
                  <div className="input-group input-group-alternative float-right search">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-search" aria-hidden="true" />
                      </span>
                    </div>
                    <input
                      className="form-control form-control-alternative"
                      placeholder="Search"
                      type="text"
                    />
                  </div>
                </div>
                <hr className="hr mb-5 mt-5" />
                <div className="row row-grid">{articleItems}</div>
                <Paginations updated={this.updateArticles} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  articles: state.articles.articles,
});

export default connect(
  mapStateToProps,
  { fetchArticlesAction },
)(Articles);
