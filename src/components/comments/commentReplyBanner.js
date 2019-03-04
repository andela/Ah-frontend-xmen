import React from 'react';
import Collapsible from 'react-collapsible';
import CommentInput from '../../components/comments/commentInput';
import CommentsInput from '../../views/commentView/commentView';
const commentReplyBanner = props => {
  const replies=props.replyList.map(reply=>{
    if(props.commentId === reply.comment){
      return(
        <div key={reply.id} className="shadow container p-5">
          <p >{reply.id}</p>
          <p>{reply.reply_body}</p>
          <p>{reply.author.username}</p>
          {props.user===reply.author.username ?
            <button className="btn btn-danger" id={reply.id} onClick={props.deleteReply}>Remove</button>
            : null}
        </div>

      )
    }
    else {
      return null
    }

  })
  return(
    <div>

      <Collapsible trigger={<button className="btn btn-white" onClick={props.getReplies}>View Replies</button>}>
        <CommentInput handleSubmit={props.handleSubmit}
                      onChange={props.handleChange}
                      AuthUserImage={props.authorImage}
                      user={props.authorUsername}
                      authenticted={props.IsAuth}
                      value={props.value}
        />
        {replies}
      </Collapsible>

    </div>

  )

}

export default commentReplyBanner;
