import React from 'react';
import Collapsible from 'react-collapsible';
import parseDate from '../../utils/neededFiles';

const CommentBanner = (props) => {
  const comment = props.comments.map(comment => (
    <div className="comments p-4 mb-3" key={comment.id}>
      <div className="comments-header row">
        <div className="col-md-1 col-sm-2">
          <img
            className="comment-img rounded-circle float-left mr-3 avatar shadow img-fluid"
            src={
              !comment.author.image ? 'https://res.cloudinary.com/soultech/image/upload/v1550685426/authors%20haven%20pics/avatar.png' : comment.author.image
            }
            width=""
            alt={comment.author.username}
            title={comment.author.username}
          />
        </div>
        <div className="col-md-10">
          <p className="author-comment">{comment.author.username}</p>
          <p className="the-date">{parseDate(comment.createdAt)}</p>
        </div>
        <div className="col-md-1">
          { props.user === comment.author.username
            ? (
              <div className="row">
                <i
                  id={comment.id}
                  onClick={props.deleteComment}
                  className="fas fa-trash-alt col-md-6 "
                  onKeyPress=""
                  role="button"
                  tabIndex="0"
                />
                <i
                  className="fas fa-pen col-md-6"
                  id={comment.id}
                  onClick={props.handleOpen}
                  onKeyPress=""
                  role="button"
                  tabIndex="0"
                />
              </div>

            )
            : null
        }

        </div>
      </div>

      <div className="comments-body">
        <p className="the-body">
          {comment.body}
        </p>
      </div>
      { props.user === comment.author.username
        ? (
          <Collapsible open={comment.id === parseInt(props.collapsibleID) ? props.open : false} id={props.collapsibleID} className="the-collapse">
            <form id={comment.id} onSubmit={props.handleUpdateSubmit}>
              <textarea
                className="form-control mb-3 mt-2"
                rows="5"
                placeholder="Leave a comment"
                aria-label="With textarea"
                type="text"
                name="body"
                defaultValue={comment.body}
                onChange={props.handleUpdate}
                required
              />
              <button className="btn btn-outline-primary mt-2">Update</button>
            </form>
          </Collapsible>

        )
        : null}

    </div>


  ));
  return (
    <div className="comments-container container">
      <p className="">
        {' '}
        <span>Comments:</span>
        {' '}
        {props.commentsCount}
      </p>
      {comment}


    </div>
  );
};

export default CommentBanner;
