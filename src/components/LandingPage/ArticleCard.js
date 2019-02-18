import React from 'react';
import { Link } from 'react-router-dom';
import parseDate from '../../utils/neededFiles';

export class ArticleCard extends React.Component {
  state = {};

  render() {
    return (
      <div className="col-lg-4">
        <Link to={`/article/${this.props.slug}`}>

          <div className="card card-lift--hover mb-5 p-0 border-0">
            <div className="card-board">
              <img alt="" className="img-fluid shadow" src={this.props.image} />
              <h4 className="text-primary mt-3">{this.props.title}</h4>
              <p className="description mt-3">{this.props.description}</p>
              <hr className="hr" />
              <div className="bottom-bar">
                <div className="left">
                  <img
                    alt=""
                    src={
                    !this.props.author.image
                      ? 'https://res.cloudinary.com/soultech/image/upload/v1550685426/authors%20haven%20pics/avatar.png'
                      : this.props.author.image
                  }
                    className="img-profile"
                  />
                </div>
                <div className="left">
                  <p className=" about text-left ml-3 text-primary">
                    {this.props.author.username}
                    <br />
                    {parseDate(this.props.created_at)}
                  &middot;
                    {this.props.read_time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ArticleCard;
