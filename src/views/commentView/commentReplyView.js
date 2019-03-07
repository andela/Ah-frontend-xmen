import React, { Component } from 'react';
import CommentReplyBanner from '../../components/comments/commentReplyBanner';
import { getCommentReplies } from '../../actions/commentActions/commentReplyActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createCommentReplyAction, deleteCommentReplyAction, updateCommentReplyAction }
    from '../../actions/commentActions/commentReplyActions';
import {ToastContainer} from 'react-toastify';

export class CommentReplyView extends Component {

  state = {
    reply_body:"",
    updateBody:"",
    open:false,
    id:""
  };

  handleOpen = e => {
    const openState=this.state.open
    this.setState({
      open: !openState,
      id:e.target.id
    });
  }
  handleChange = e => {
   this.setState({
     reply_body: e.target.value
   })
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.createCommentReplyAction({
      slug: this.props.match.params.slug,
      commentId: this.props.commentId,
      reply_body: this.state
    })
    setTimeout(()=>{
      this.props.getCommentReplies({
        slug:this.props.match.params.slug,
        commentId:this.props.commentId
      })
    },500)

  };

  handleFetch = () => {
    this.props.getCommentReplies({
      slug: this.props.match.params.slug,
      commentId: this.props.commentId
    })
  };

  handleDelete = (e) => {
    this.props.deleteCommentReplyAction({
      slug: this.props.match.params.slug,
      commentId: this.props.commentId,
      reply_id: e.target.id
    });
  };

  handleUpdateChange = e => {
   this.setState({
     updateBody: e.target.value
   })
  };

  handleUpdateSubmit = e => {
    e.preventDefault();
    this.props.updateCommentReplyAction({
      slug: this.props.match.params.slug,
      commentId: this.props.commentId,
      reply_id: e.target.id,
      reply_body: this.state.updateBody
    })

  };


  componentWillReceiveProps(nextProps) {
    if(nextProps.commentReplyState.isSuccessful){
      this.setState({
        reply_body:""
      })
    }
  };


  render() {
    const replies = this.props.commentReplyState.payload;
    return (
      <div>
        <CommentReplyBanner getReplies={this.handleFetch}
                            commentId={this.props.commentId}
                            replyList={replies}
                            user={this.props.authState.username}
                            authorImage={this.props.authState.image}
                            IsAuth={this.props.authState.IsAuth}
                            authorUsername={this.props.authState.username}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            value={this.state.reply_body}
                            deleteReply={this.handleDelete}
                            updateSubmit={this.handleUpdateSubmit}
                            handleUpdateChange={this.handleUpdateChange}
                            open={this.state.open}
                            handleOpen={this.handleOpen}
                            collapsibleID={this.state.id}
          />
          <ToastContainer/>
      </div>

    )
  }
}
export const mapStateToProps = state => {
  return{
    commentReplyState:state.commentReplies,
    authState:state.Auth
  }
};

export default withRouter(connect(mapStateToProps ,{ getCommentReplies, createCommentReplyAction,
  deleteCommentReplyAction, updateCommentReplyAction }) (CommentReplyView));
