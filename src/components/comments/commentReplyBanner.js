import React from 'react';

const commentReplyBanner = props => {
  const replies=props.replyList.map(reply=>{
    console.log('commentBanner==========>',props.commentId)
    if(props.commentId === 388){
      return(
        <p key={reply.id}>{reply.id}</p>
      )
    }
    else {
      return null
    }

  })
  return(
    <div>
      <button className="btn btn-white" onClick={props.getReplies}>View Replies</button>
      {replies}
      {props.commentId}
    </div>

  )

}

export default commentReplyBanner;
