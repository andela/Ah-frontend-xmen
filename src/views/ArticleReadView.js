import React from 'react';
import { connect } from 'react-redux';
import ArticlComponent from '../components/Articles/ArticleComponent';
import getSingleArticle from '../actions/articleActions/getSingleArticle';


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
      article: {
        author: {
          useraname: '',
        },
      },
      notFound: false,

    };
  }


  componentWillMount() {
    const { props } = this;
    const { slug } = props.match.params;
    props.getSingleArticle(slug);
  }

  componentWillReceiveProps(props) {
    if (props.articleReducer.article === null) {
      this.setState({
        notFound: true,
      });
    } else {
      this.setState({
        article: props.articleReducer.article,
      });
    }
  }

  render() {
    const { article, notFound } = this.state;
    if (notFound) {
      return (
        <div className="h-100 w-100 p-5 m-5  text-center">
          <span style={{ fontSize: '800%' }}>404</span>
        </div>
      );
    }
    if (article)article.share_links = parseShareLinks(article, this.props.match.params.slug);
    return (
      <div>
        <ArticlComponent {...article} />
      </div>
    );
  }
}

export const mapStateToProps = state => (
  {
    ...state,
  }
);
export default connect(mapStateToProps, { getSingleArticle })(ArticleReadView);
