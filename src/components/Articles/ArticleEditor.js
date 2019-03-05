import React from 'react';
import TagsInput from 'react-tagsinput';
import ReactQuill from 'react-quill';

const quillModules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
  ],

};

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
          <ReactQuill className="ql-editor" value={body} onChange={onBodyChange} placeholder="Tell your story...... " name="body" modules={quillModules} />
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
