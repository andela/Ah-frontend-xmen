import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ArticlComponent from '../components/Articles/ArticleComponent';
import getSingleArticle from '../actions/articleActions/getSingleArticle';
import CommentView from './commentView/commentView';


function parseShareLinks(article, slug) {
  const articleUrl = `${process.env.FRONTEND_BASE_URL}/articles/${slug}`;
  const shareBody = `This is an interesting article, ${article.title} ${articleUrl}`;
  const mailshare = `mailto:?Subject=${encodeURI(article.title)}&body=${shareBody}`;
  const fbshare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(articleUrl)}`;
  const gpshare = `https://plus.google.com/share?url=${encodeURI(articleUrl)}`;
  const twshare = `https://twitter.com/home?status=${encodeURI(shareBody)}`;

  return {
    mailshare, fbshare, gpshare, twshare,
  };
}


export class ArticleReadView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notFound: false,
      loading: true,

    };
  }


  componentWillMount() {
    const { props } = this;
    const { slug } = props.match.params;
    props.getSingleArticle(slug);
  }

  componentWillReceiveProps(props) {
    this.setState({
      loading: false,
    });
  }

  render() {
    const { article } = this.props;
    if (this.state.loading) {
      return (
        <div className="h-100 w-100 p-5 m-5  text-center">
          <span style={{ fontSize: '400%' }}>Loading.....</span>
        </div>
      );
    }

    if (article.title === '') {
      return (
        <div className="h-100 w-100 p-5 m-5  text-center">
          <span style={{ fontSize: '400%' }}>404</span>
        </div>
      );
    }

    article.share_links = parseShareLinks(article, this.props.match.params.slug);

    return (
      <div>
        <ArticlComponent
          slug={this.props.match.params.slug}
          {...article}
        />
        <CommentView />
        <ToastContainer />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  article: state.articleReducer.article,
  loading: state.articleReducer.loading,
});
export default connect(mapStateToProps, { getSingleArticle })(ArticleReadView);
