import React, { Component } from 'react';
import CommentReplyBanner from '../../components/comments/commentReplyBanner';
import { getCommentReplies } from '../../actions/commentActions/commentReplyActions';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

class CommentReplyView extends Component {
  componentWillMount() {
    // console.log(this.props.commentId)


  }
  handleFetch=(e)=>{

    console.log(this.props.commentId)
    this.props.getCommentReplies({
      slug:this.props.match.params.slug,
      commentId:this.props.commentId

    })
  }

  render() {
    // console.log(this.props.commentReplyState)
    return(
      <CommentReplyBanner getReplies={this.handleFetch} commentId={this.props.commentId} replyList={this.props.commentReplyState.payload}/>
    )
  }
}
export const mapStateToProps = state => {
  return{
    commentReplyState:state.commentReplies
  }


}

export default withRouter(connect(mapStateToProps ,{ getCommentReplies }) (CommentReplyView));
