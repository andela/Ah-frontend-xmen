import React from 'react';
import { connect } from 'react-redux';
import LikeButton from '../../components/Buttons/LikeButton';
import likeDislikeArticleAction from '../../actions/articleActions/LikeDislikeArticleAction';
import getLikeDislikeArticleStatus from '../../actions/articleActions/getLikeDislikeArticleStatus';

export class LikeButtonView extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  componentWillMount() {
    this.props.getLikeStatus(this.props.slug);
  }


    handleLike = () => {
      const { slug, isLikeBtn } = this.props;
      const { liked } = this.props.likeState;
      this.props.likeAction(slug, !liked, isLikeBtn);
    }

    render() {
      const { liked, likesCount } = this.props.likeState;
      return (
        <LikeButton
          liked={liked}
          handleLike={this.handleLike}
          likesCount={likesCount}
        />
      );
    }
}

const mapStateToProps = state => ({
  likeState: state.likeArticleReducer,
});
const actionCreators = {
  likeAction: likeDislikeArticleAction,
  getLikeStatus: getLikeDislikeArticleStatus,
};
export default connect(
  mapStateToProps, actionCreators,
)(LikeButtonView);
