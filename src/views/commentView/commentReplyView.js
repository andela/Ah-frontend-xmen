import React, { Component } from 'react';
import CommentReplyBanner from '../../components/comments/commentReplyBanner';
import { getCommentReplies } from '../../actions/commentActions/commentReplyActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createCommentReplyAction, deleteCommentReplyAction } from '../../actions/commentActions/commentReplyActions';
import {ToastContainer} from 'react-toastify';

class CommentReplyView extends Component {

  state = {
    reply_body:""
  }

  handleChange = e => {
   this.setState({
     reply_body:e.target.value
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

  }

  handleFetch = (e) => {
    this.props.getCommentReplies({
      slug: this.props.match.params.slug,
      commentId: this.props.commentId
    })
  }
  handleDelete = (e) => {
    let replies = this.props.commentReplyState.payload

    this.props.deleteCommentReplyAction({
      slug: this.props.match.params.slug,
      commentId: this.props.commentId,
      reply_id: e.target.id
    })

    // setTimeout(()=>{
    //   // this.props.getCommentReplies({
    //   //   slug: this.props.match.params.slug,
    //   //   commentId: this.props.commentId
    //   // })
    //   window.location.reload()
    // },2000)

  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps.commentReplyState.replyDeleteSuccess)
    if(nextProps.commentReplyState.isSuccessful){
      this.setState({
        reply_body:""
      })
    }
    else if(nextProps.commentReplyState.replyDeleteSuccess){
      this.props.getCommentReplies({
        slug: this.props.match.params.slug,
        commentId: this.props.commentId
      })
    }


  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('will update')
  }

  render() {
    const replies = this.props.commentReplyState.payload;
    return(
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


}

export default withRouter(connect(mapStateToProps ,{ getCommentReplies, createCommentReplyAction, deleteCommentReplyAction }) (CommentReplyView));
