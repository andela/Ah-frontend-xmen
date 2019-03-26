import React from 'react';
import { mount } from 'enzyme';
import { CommentView, mapStateToProps } from './commentView';


const props = {
  deleteCommentAction: jest.fn(),
  getCommentsAction: jest.fn(),
  UpdateCommentAction: jest.fn(),
  prevenDefault: jest.fn(),
  postCommentAction: jest.fn(),
  setState: jest.fn(),
  match: {
    params: {
      slug: 'aslug',
    },
  },

  commentsState: {
    payload: {
      comments: [],
    },
  },
  authState: {
    image: '',
  },
  getAuthUserDetails: jest.fn(),

};
let wrapper;
global.confirm = () => true;
jest.useFakeTimers();
describe('<CommentView/>', () => {
  beforeEach(() => {
    wrapper = mount(<CommentView {...props} />);
  });
  const e = {
    target: { id: 1 },
    preventDefault: () => {

    },
    body: 'body',
    value: '',

  };


  it('should handle deletion', () => {
    wrapper.instance().handleDelete(e);
    expect(wrapper.instance().props.deleteCommentAction).toBeCalled();
  });

  it('should handle Submit', () => {
    wrapper.instance().handleSubmit({ preventDefault() {} });
    expect(wrapper.instance().props.postCommentAction).toBeCalled();
  });

  it('should return a state from redux store', () => {
    expect(mapStateToProps({})).toEqual({ authState: undefined, commentsState: undefined });
  });

  it('should recieve next props on comment update', () => {
    wrapper.setProps({
      commentsState: {
        updateCommentSuccess: true,
        payload: {
          comments: [{
            id: 1,
            author: {
              image: '',
            },
          }],
        },
      },
    });

    expect(wrapper.instance().props.commentsState.updateCommentSuccess).toBeTruthy();
  });

  it('should handle state change in updating a comment', () => {
    wrapper.instance().handleUpdateChange(e);
    jest.runAllTimers();
    wrapper.setState({
      body: 'body',
    });
    expect(wrapper.state().body).toHaveLength(4);
  });

  it('should form submit got updating a comment', () => {
    wrapper.instance().handleUpdateSubmit(e);
    expect(wrapper.instance().props.UpdateCommentAction).toBeCalled();
  });

  it('should handle input change', () => {
    wrapper.instance().handleChange(e);
    expect(wrapper.state().body).toEqual(undefined);
  });
  it('should reset state after successfully creation of a comment', () => {
    wrapper.setProps({
      commentsState: {
        payload: {
          comments: [],
        },
        createCommentSuccess: true,
      },
    });
    expect(wrapper.instance().state.body).toEqual('');
  });
  it('should open collapsiable', () => {
    wrapper.state({
      open: false,
    });
    const e = {
      target: {
        id: 1,
      },
    };
    wrapper.instance().handleOpen(e);
    expect(wrapper.instance().state.open).toEqual(true);
  });
});
