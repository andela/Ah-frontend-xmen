import React from 'react';
import { connect } from 'react-redux';
import fetchAllTags from '../actions/articleActions/fetchTagsAction';

const uuidv4 = require('uuid/v4');

export class TagListView extends React.Component {
  constructor() {
    super();
    this.state = {
      sliceStart: 0,
      sliceEnd: 6,
    };
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

    componentWillMount = () => {
      this.props.fetchAllTags();
    };

    handleLeftClick() {
      if (this.state.sliceEnd !== this.props.tagList.length) {
        this.setState(prevState => ({
          sliceStart: prevState.sliceStart + 1,
          sliceEnd: prevState.sliceEnd + 1,
        }));
      }
    }

    handleRightClick() {
      if (this.state.sliceStart !== 0) {
        this.setState(prevState => ({
          sliceStart: prevState.sliceStart - 1,
          sliceEnd: prevState.sliceEnd - 1,
        }));
      }
    }

    render() {
      return (
        <div>
          <ul className="container list-inline mt-4 article-tags">
            <small className="mr-3">Tags:</small>
            <i
              className="fas fa-caret-left fa-2x mr-3"
              onClick={this.handleLeftClick}
              role="button"
              tabIndex="0"
              onKeyPress={() => {}}
            />
            {this.props.tagList.slice(this.state.sliceStart, this.state.sliceEnd).map(tag => <li key={uuidv4()} className="list-inline-item badge">{tag}</li>)}
            <i
              className="fas fa-caret-right fa-2x ml-2"
              onClick={this.handleRightClick}
              role="button"
              tabIndex="0"
              onKeyPress={() => {}}
            />
          </ul>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  tagList: state.tagsListReducer.tags,
});

export default connect(mapStateToProps, { fetchAllTags })(TagListView);
