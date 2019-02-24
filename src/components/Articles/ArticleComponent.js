/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';
import StarRatings from 'react-star-ratings';
import ReactTooltip from 'react-tooltip';
import LikeButtonView from '../../views/Buttons/LikeButtonView';
import DislikeButtonView from '../../views/Buttons/DislikeButtonView';
import EditButton from '../../views/articleEditorView/EditArticleButton';
import DeleteButton from '../../views/articleEditorView/DeleteArticleButton';

function parseDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function parseName(author) {
  if (author.first_name === undefined) return author.username;

  return `${author.first_name} ${author.last_name}`;
}

function parseAvatar(image) {
  if (image === null) return 'https://res.cloudinary.com/soultech/image/upload/v1550685426/authors%20haven%20pics/avatar.png';
  return image;
}

function parseImage(image) {
  if (image !== null) return (<img className="img-respoonsive w-100 mb-5" src={image} alt="article" />);
  return undefined;
}

const ArticleComponent = (props) => {
  let starRatings = (
    <StarRatings
      name={props.slug}
      rating={props.average_rating}
      starRatedColor=" #FFD700"
      starDimension="20px"
      starSpacing="3px"
      changeRating={props.changeRating}
    />
  );
  if (props.changeRating === null) {
    starRatings = (
      <span className=" text-muted">
        {' '}
        {props.average_rating}
        {' '}
        <i className="fa fa-star" style={{ color: '#FFD700' }} aria-hidden="true" />
      </span>
    );
  }
  return (
    <div className="container p-5">
      <div className="col-m-9 col-s-12 p-5">
        <div className="">
          <h1 className="display-2">{props.article.title}</h1>
        </div>
        <Link to={`/profiles/${props.article.author.username}`}>
          <div className="">
            <img className="rounded-circle float-left mr-3 avatar" src={parseAvatar(props.article.author.image)} alt="author avatar" />
            <p className="text-muted align-middle">
              <strong>{parseName(props.article.author)}</strong>
              {' '}
              <br />
              {parseDate(props.article.created_at)}
              {' '}
  &middot;
              {props.article.read_time}
            </p>
          </div>

        </Link>
        <div className="mb-4">
          <table>
            <tbody>
              <tr>
                <td>
                  <EditButton
                    onClick={props.onClick}
                    slug={props.slug}
                    username={props.article.author.username}
                  />

                </td>
                <td>
                  <DeleteButton
                    onClick={props.onClick}
                    slug={props.slug}
                    username={props.article.author.username}
                  />

                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="img-respoonsive w-100">
          {parseImage(props.article.image)}
        </div>

        <div className="text-justify mb-5">
          {Parser(String(props.article.body))}
        </div>
        <div>
          <div className="float-left">
            <LikeButtonView slug={props.slug} likesCount={props.likes_count} isLikeBtn />
            <DislikeButtonView
              slug={props.slug}
              dislikesCount={props.dislikes_count}
              isLikeBtn={false}
            />
            {starRatings}

          </div>
          <div className="float-right">
            <span data-tip="Bookmark for later" id="bookmark" onClick={props.onBookmark} className={props.isLoggedin ? 'text-default' : 'hidden text-muted'}><span className="m-2"><i className={props.isBookmarked ? 'fas fa-bookmark fa-lg text-default' : 'far fa-bookmark fa-lg'} /></span></span>
            <a rel="noopener noreferrer" target="_blank" href={props.article.share_links.fbshare}><span className="m-2"><i className="fab fa-facebook-square  fa-lg" /></span></a>
            <a rel="noopener noreferrer" target="_blank" href={props.article.share_links.twshare}><span className="m-2"><i className="fab fa-twitter-square  fa-lg" /></span></a>
            <a rel="noopener noreferrer" target="_blank" href={props.article.share_links.gpshare}><span className="m-2"><i className="fab fa-google-plus-square  fa-lg" /></span></a>
            <a rel="noopener noreferrer" target="_blank" href={props.article.share_links.mailshare}><span className="m-2"><i className="fas fa-envelope-square  fa-lg" /></span></a>
            <span className="m-2">
              <i className="fas fa-flag" id="report" onClick={props.onClick} />
            </span>

          </div>
          <ReactTooltip />
        </div>
      </div>
    </div>

  );
};


export default ArticleComponent;
