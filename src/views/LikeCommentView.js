import React from 'react';
import { connect } from 'react-redux';
import likeCommentAction from '../actions/commentActions/commentActions';
import CommentBanner from '../components/comments/commentBanner';


class LikeCommentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick=(e) =>{
    console.log('hey');
  }

  render() {
    return (
      <CommentBanner onClick={this.handleClick} />
    );
  }
}
const mapStateToProps = state => ({
  likeCommentsAction: state.likeCommentReducer,
});
export default connect(mapStateToProps, { likeCommentAction })(LikeCommentView);
