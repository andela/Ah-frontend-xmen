import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import CommentsInput from '../../components/comments/commentInput';
import CommentBanner from '../../components/comments/commentBanner';
import getCommentsAction, {
 postCommentAction, deleteCommentAction, UpdateCommentAction, likeCommentAction 
} from '../../actions/commentActions/commentActions';
import getAuthUserDetails from '../../actions/authAction';


export class CommentView extends Component {
    state={
      body: '',
      open: false,
      isLiked: false,
    }

    componentDidMount() {
      this.props.getCommentsAction({
        articleSlug: this.props.match.params.slug,
      });
      this.props.getAuthUserDetails();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.commentsState.updateCommentSuccess) {
        setTimeout(() => {
          window.location.reload();
        }, 900);
      }
    }

    handleUpdateSubmit=(e) => {
      e.preventDefault();
      this.props.UpdateCommentAction({
        articleSlug: this.props.match.params.slug,
        payload: this.state.body,
        commentId: e.target.id,
      });
    };


    handleUpdateChange=(e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };


    handleSubmit=(e) => {
      e.preventDefault();
      this.props.postCommentAction({
        payload: this.state,
        articleSlug: this.props.match.params.slug,
      });
      setTimeout(() => {
        this.props.getCommentsAction({
          articleSlug: this.props.match.params.slug,
        });
      }, 1000);
    };

    handleChange=(e) => {
      this.setState({
        body: e.target.value,
      });
    };

    handleDelete=(e) => {
      const answer = confirm('Are U sure u want to delete this comment');
      if (answer) {
        this.props.deleteCommentAction({
          articleSlug: this.props.match.params.slug,
          commentId: e.target.id,
        });
        setTimeout(() => {
          this.props.getCommentsAction({
            articleSlug: this.props.match.params.slug,
          });
        }, 1000);
      }
    };

    handleLike = (e) => {
      this.setState({
        isLiked: true,
      });
      this.props.likeCommentAction({
        articleSlug: this.props.match.params.slug,
        commentId: e.target.id,
      });
    }

    render() {
      const { comments } = this.props.commentsState.payload;

      return (

        <div className="comments-view container">
          <CommentsInput
            handleSubmit={this.handleSubmit}
            onChange={this.handleChange}
            AuthUserImage={this.props.authState.image}
            user={this.props.authState.username}
            authenticted={this.props.authState.IsAuth}

          />

          {!comments ? <p>loading</p>
            : (
              <CommentBanner
                comments={this.props.commentsState.payload.comments}
                commentsCount={this.props.commentsState.payload.commentCount}
                user={this.props.authState.username}
                deleteComment={this.handleDelete}
                handleUpdateSubmit={this.handleUpdateSubmit}
                handleUpdate={this.handleUpdateChange}
                open={this.state.open}
                onClick={this.handleLike}
              />
            )
            }
          <ToastContainer />
        </div>
      );
    }
}
export const mapStateToProps = state => ({
  commentsState: state.comments,
  authState: state.Auth,
  likeState: state.likeCommentReducer,
});
export default withRouter(connect(mapStateToProps, {
  getCommentsAction,
  postCommentAction,
  getAuthUserDetails,
  deleteCommentAction,
  UpdateCommentAction,
  likeCommentAction,
})(CommentView));
