import React from 'react';

const CommentsInput = props => (

  <div className="comment-input mt-5 container">
    <form className="form-group" onSubmit={props.handleSubmit}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <img src={!props.AuthUserImage ? 'https://res.cloudinary.com/soultech/image/upload/v1550685426/authors%20haven%20pics/avatar.png' : props.AuthUserImage} width="60" alt="Profile Avatar" title={props.user} className="img-fluid comment-img rounded-circle float-left mr-3 avatar" />
          </span>

        </div>
        <textarea name="body" onChange={props.onChange} value={props.value} rows="5" className="form-control" placeholder="Leave a comment" aria-label="With textarea" required />
      </div>
      {props.authenticted
        ? <button type="submit" className="btn btn-primary mt-2">Comment</button>
        : <button type="submit" className="btn btn-primary mt-2" disabled>Please Login To Comment</button>
      }
    </form>
  </div>

);

export default CommentsInput;
