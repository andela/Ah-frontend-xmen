import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import DislikeButton from '../../components/Buttons/DislikeButton';
import likeDislikeArticleAction from '../../actions/articleActions/LikeDislikeArticleAction';
import getLikeDislikeArticleStatus from '../../actions/articleActions/getLikeDislikeArticleStatus';

export class DislikeButtonView extends React.Component {
  constructor(props) {
    super(props);
    this.handleDislike = this.handleDislike.bind(this);
  }

  componentWillMount() {
    this.props.getDislikeStatus(this.props.slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dislikeState.errorMessage.dislike) {
      toast.error(nextProps.dislikeState.errorMessage.dislike);
    }
  }

    handleDislike = () => {
      const { slug, isLikeBtn } = this.props;
      const { disliked } = this.props.dislikeState;
      this.props.dislikeAction(slug, !disliked, isLikeBtn);
    }

    render() {
      const { disliked, dislikesCount } = this.props.dislikeState;

      return (
        <DislikeButton
          disliked={disliked}
          handleDislike={this.handleDislike}
          dislikesCount={dislikesCount}
        />
      );
    }
}

const mapStateToProps = state => ({
  dislikeState: state.likeArticleReducer,
});

const actionCreators = {
  dislikeAction: likeDislikeArticleAction,
  getDislikeStatus: getLikeDislikeArticleStatus,
};

export default connect(
  mapStateToProps,
  actionCreators,
)(DislikeButtonView);
