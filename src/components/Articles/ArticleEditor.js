import React from 'react';
import TagsInput from 'react-tagsinput';
import ReactQuill from 'react-quill';


const Editor = ({
  onChange, onSubmit, title, description, body, tags, onInputChange, onBodyChange,
}) => (
  <div className="container">
    <form onSubmit={onSubmit} className="mt-5">
      <div>
        <div className="form-group">
          <input
            name="title"
            className="form-control form-control-alternative"
            type="text"
            placeholder="Title"
            value={title}
            onChange={onInputChange}
          />
        </div>

        <div className=" form-group ">

          <input className="form-control form-control-alternative" type="text" name="description" placeholder="What's this article about?" value={description} onChange={onInputChange} />
        </div>

        <div className="form-group">
          <ReactQuill className="ql-editor" value={body} onChange={onBodyChange} placeholder="Tell your story...... " name="body" />
        </div>
        <div className="form-group" id="tag-input">
          <TagsInput className="form-control form-control-alternative" type="text" name="tags" value={tags} onChange={onChange} />
        </div>
        <div className="container">
          <button className="btn button-primary mb-4 float-right" type="submit">
            Publish Article
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default Editor;
