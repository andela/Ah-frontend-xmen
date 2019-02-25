
import React from 'react';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';
import LikeButtonView from '../../views/Buttons/LikeButtonView';
import DislikeButtonView from '../../views/Buttons/DislikeButtonView';

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
  if (image === null) return '/src/assets/images/avatar.png';
  return image;
}

function parseImage(image) {
  if (image !== null) return (<img className="img-respoonsive w-100 mb-5" src={image} alt="article" />);
  return undefined;
}

const ArticleComponent = props => (
  <div className="container p-5">
    <div className="col-m-9 col-s-12 p-5">
      <div className="">
        <h1 className="display-2">{props.title}</h1>
      </div>
      <Link to={`/profile/${props.author.username}`}>
        <div className="">
          <img className="rounded-circle float-left mr-3 avatar" src={parseAvatar(props.author.image)} alt="author avatar" />
          <p className="text-muted align-middle">
            <strong>{parseName(props.author)}</strong>
            {' '}
            <br />
            {parseDate(props.created_at)}
            {' '}
  &middot;
            {props.read_time}
          </p>

        </div>

      </Link>
      <div className="img-respoonsive w-100">
        {parseImage(props.image)}
      </div>

      <div className="text-justify mb-5">
        {Parser(String(props.body))}
      </div>
      <div>
        <div className="float-left">
          <LikeButtonView slug={props.slug} likesCount={props.likes_count} isLikeBtn />
          <DislikeButtonView
            slug={props.slug}
            dislikesCount={props.dislikes_count}
            isLikeBtn={false}
          />

        </div>
        <div className="float-right">
          <span className="m-2"><i className="far fa-bookmark fa-lg" /></span>
          <a rel="noopener noreferrer" target="_blank" href={props.share_links.fbshare}><span className="m-2"><i className="fab fa-facebook-square  fa-lg" /></span></a>
          <a rel="noopener noreferrer" target="_blank" href={props.share_links.twshare}><span className="m-2"><i className="fab fa-twitter-square  fa-lg" /></span></a>
          <a rel="noopener noreferrer" target="_blank" href={props.share_links.gpshare}><span className="m-2"><i className="fab fa-google-plus-square  fa-lg" /></span></a>
          <a rel="noopener noreferrer" target="_blank" href={props.share_links.mailshare}><span className="m-2"><i className="fas fa-envelope-square  fa-lg" /></span></a>
          <a rel="noopener noreferrer" target="_blank" href={`/article/report/${props.title}`}><span className="m-2"><i className="fas fa-flag" id="report" /></span></a>
        </div>
      </div>
    </div>
  </div>

);


export default ArticleComponent;
