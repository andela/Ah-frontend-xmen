import React from 'react';
import Collapsible from 'react-collapsible';
import parseDate from '../../utils/neededFiles';
import LikeButton from '../Buttons/LikeButton';

const CommentBanner = (props) => {
  const comment = props.comments.map(comment => (
    <div className="comments p-4 mb-3" key={comment.id}>
      <div className="comments-header row">
        <div className="col-md-1 col-sm-2">
          <img
            className="shadow img-fluid"
            src={
              !comment.author.image ? 'https://res.cloudinary.com/soultech/image/upload/v1550685426/authors%20haven%20pics/avatar.png' : comment.author.image
            }
            width=""
            alt="Profile Avatar"
            title="Jack Smith"
            className="img-fluid comment-img rounded-circle float-left mr-3 avatar "
          />
        </div>
        <div className="col-md-10">
          <p className="author-comment">{comment.author.username}</p>
          <p className="the-date">{parseDate(comment.createdAt)}</p>
        </div>
        <div className="col-md-1">
          { props.user === comment.author.username
            ? (
              <i
                id={comment.id}
                onClick={props.deleteComment}
                className="fas fa-trash-alt "
              />
            )
            : (
              <div id="btnlike">
                <LikeButton />
              </div>
            )
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

          <div className="">
            <Collapsible open={props.open} className="the-collapse" trigger={<i className="fas fa-edit" id={comment.id} />}>
              <form id={comment.id} onSubmit={props.handleUpdateSubmit}>
                <textarea
                  className="form-control mb-3 mt-2"
                  rows="5"
                  className="form-control"
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
          </div>

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
