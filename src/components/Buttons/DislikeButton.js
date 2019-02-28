import React from 'react';

const DislikeButton = (props) => {
  const classNames = props.disliked ? 'btn btn-sm btn-default' : 'btn btn-sm btn-outline-default';
  return (
    <button type="button" id="like-btn" onClick={props.handleDislike} className={classNames}>
      <span className="pr-1"><i className="fa fa-sm fa-thumbs-down" /></span>
      {props.dislikesCount}
    </button>
  );
};

export default DislikeButton;
