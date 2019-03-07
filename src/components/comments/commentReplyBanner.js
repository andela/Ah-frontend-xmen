import React from 'react';
import Collapsible from 'react-collapsible';
import CommentInput from '../../components/comments/commentInput';
import parseDate from  '../../utils/neededFiles';

const commentReplyBanner = props => {
  const replies=props.replyList.map(reply => {
    if(props.commentId === reply.comment){
      return(
        <div key={reply.id} className="row mb-2 mt-2 container comments">
          <div className="col-md-2">
            <img
              className="shadow img-fluid"
              src={
                !reply.author.image ? 'https://res.cloudinary.com/soultech/image/upload/v1550685426/authors%20haven%20pics/avatar.png' : reply.author.image
              }
              width=""
              alt={reply.author.username}
              title={reply.author.username}
              className="img-fluid comment-img rounded-circle float-left mr-3 avatar "
            />
          </div>
          <div className="col-md-9">
            <div className="row author-comment">
              {reply.author.username}
            </div>
            <div className="row ">
              {parseDate(reply.repliedOn)}
            </div>
            <hr/>
            <div className="">
              {reply.reply_body}

            </div>
            <div className="">
                <Collapsible  open={reply.id === parseInt(props.collapsibleID) ? props.open:false} id={props.collapsibleID}>

                  <form className="form-group" onSubmit={props.updateSubmit} id={reply.id}>
                  <textarea required className="form-control" id="comment-reply" defaultValue={reply.reply_body} onChange={props.handleUpdateChange}
                            name="reply_body"></textarea>
                    <div>
                      <button className="btn btn-primary mt-2" type="submit">update</button>
                    </div>

                  </form>
                </Collapsible>
            </div>
<hr/>
          </div>
            <hr/>
            <div className="col-md-1">
              { props.user === reply.author.username
                ? (
                  <div className="row">
                    <i
                      id={reply.id} onClick={props.deleteReply}
                      className="fas fa-trash-alt col-md-6 "
                    />
                    <i
                      id={reply.id} onClick={props.handleOpen}
                      className="fas fa-edit col-md-6"
                    />

                  </div>

                )
                : null
              }
            </div>
        </div>
      );
    }
    else  {
      return null
    }

  })
  return(
    <div>

      <Collapsible trigger={<button className="btn btn-white" onClick={props.getReplies}>View Replies</button>}>
        <ul>
          <li>
            <ul>
              <li>
                <CommentInput handleSubmit={props.handleSubmit}
                              onChange={props.handleChange}
                              AuthUserImage={props.authorImage}
                              user={props.authorUsername}
                              authenticted={props.IsAuth}
                              value={props.value}
                />
                {replies}
              </li>
            </ul>
          </li>
        </ul>
      </Collapsible>

    </div>

  )

}

export default commentReplyBanner;
