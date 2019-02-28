import React from 'react';

const LikeButton = (props) => {
  const classNames = props.liked ? 'btn btn-sm btn-default' : 'btn btn-sm btn-outline-default';
  return (
    <button type="button" id="like-btn" onClick={props.handleLike} className={classNames}>
      <span className="pr-1"><i className="fa fa-sm fa-thumbs-up" /></span>
      {props.likesCount}
    </button>
  );
};

export default LikeButton;
