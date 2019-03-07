import React from 'react';
import { shallow, mount} from 'enzyme';
import {CommentReplyView,mapStateToProps} from './commentReplyView';
import {
  createCommentReplyAction, deleteCommentReplyAction,
  getCommentReplies, updateCommentReplyAction
} from '../../actions/commentActions/commentReplyActions';


const props = {
  commentId:'1',
  authState: {
    username: "",
    image:"",
    IsAuth:true,
  },
  commentReplyState:{
    payload:[],
    isSuccessful:false,
    replyDeleteSuccess:false
  },
  match:{
    params:{
      slug:""
    }
  },
  getCommentReplies: jest.fn(),
  createCommentReplyAction: jest.fn(),
  deleteCommentReplyAction: jest.fn(),
  updateCommentReplyAction: jest.fn()
}
jest.useFakeTimers();
describe('<CommentReplyView',() => {

  it('should render without crashing', () => {
    let wrapper = shallow(<CommentReplyView {...props} />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should reset reply body state on successful creation of reply', () => {
    let wrapper = mount(<CommentReplyView {...props} />)
    wrapper.setState({
      reply_body:"A value"
    })

    wrapper.setProps({
      commentState:{
        isSuccessful: true
      }
    })
    wrapper.update()


  });
  it('should call updateCommentReplyAction ', () => {
    let wrapper = shallow(<CommentReplyView {...props} />);
    const e ={
      preventDefault:()=>{},
      target:{
        id:1
      }
    }
    wrapper.instance().handleUpdateSubmit(e)
    expect(props.updateCommentReplyAction).toBeCalled()
  })

  it('should  handleUpdateChange', () => {
    let wrapper = mount(<CommentReplyView {...props} />);
    const e ={
      target: {
        value:"update body"
      }
    }
    wrapper.instance().handleUpdateChange(e)
    expect(wrapper.instance().state.updateBody).toEqual("update body")

  });
  it('should call deleteCommentReplyAction', () => {
    let wrapper = mount(<CommentReplyView {...props} />);
    const e ={
      target:{
        id:1
      }
    }
    wrapper.instance().handleDelete(e);
    expect(props.deleteCommentReplyAction).toBeCalled();

  });
  it('should call getCommentReplies', () => {
    let wrapper = mount(<CommentReplyView {...props} />);
     wrapper.instance().handleFetch()
    expect(props.getCommentReplies).toBeCalled()

  })
  it('should call createCommentReplyAction', () => {
    let wrapper = mount(<CommentReplyView {...props} />);
    const e ={
      preventDefault: () => {}
    }
    wrapper.instance().handleSubmit(e)
    jest.runAllTimers();
    expect(props.createCommentReplyAction).toBeCalled()
  });

  it('should handleChange', () => {
    let wrapper = mount(<CommentReplyView {...props} />);
    const e = {
      target:{
        value:"change value"
      }
    }
    wrapper.instance().handleChange(e)
    expect(wrapper.instance().state.reply_body).toEqual("change value")
  });
  it('should open collapsible', () => {
    let wrapper = mount(<CommentReplyView {...props} />);
    const e = {
      target:{
        id: 1
      }
    }
    wrapper.instance().handleOpen(e)
    // expect(wrapper.instance().state.reply_body).toEqual("change value")
  });

  it('should map state to props', () => {
    expect(mapStateToProps({})).toEqual({"authState": undefined, "commentReplyState": undefined})
  });

})
