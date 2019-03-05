import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import ActionTypes from '../ActionTypes';
import { BASE_URL } from '../../constants';
import {updateCommentReplyAction,getCommentReplies,deleteCommentReplyAction
,createCommentReplyAction} from './commentReplyActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('CommentReplyActions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create a comment reply successfully', () => {
    fetchMock.post(`${BASE_URL}/articles/fake-slug/comments/1/reply/`,{
      headers:{
        'Content-Type': 'application/json'
      },
      body:{reply: {}}
    });
    const expectedActions = [{
      type: ActionTypes.CREATE_COMMENT_REPLY_SUCCESS
    }];
    const store = mockStore({ payload: [] });
    return store.dispatch(createCommentReplyAction({
      slug:'fake-slug',
      commentId:1,
      reply_body:"body"

    })).then(()=>
    {
     expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('should handle create a comment reply fail', () => {
    fetchMock.post(`${BASE_URL}/articles/fake-slug/comments/1/reply/`,{
      headers:{
        'Content-Type': 'application/json'
      },
      body:{errors:{}}
    });
    const expectedActions = [{
      type: ActionTypes.CREATE_COMMENT_REPLY_FAIL,
      payload:{}
    }];
    const store = mockStore({ payload: [] });
    return store.dispatch(createCommentReplyAction({
      slug:'fake-slug',
      commentId:1,

    })).then(()=>
    {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('should get all comment replies successfully', () => {
    fetchMock.get(`${BASE_URL}/articles/fake-slug/comments/1/reply/`,{
      headers:{
        'Content-Type': 'application/json'
      },
      body:{replies: [{}],repliesCount:0}
    });
    const expectedActions = [{
      type: ActionTypes.GET_COMMENT_REPLIES_SUCCESS,
      payload: [{}],
      replyCount: 0
    }];
    const store = mockStore({ payload: [] });
    return store.dispatch(getCommentReplies({
      slug:'fake-slug',
      commentId:1,
    })).then(()=>
    {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
  it('should handle get all comment replies fail', () => {
    fetchMock.get(`${BASE_URL}/articles/fake-slug/comments/1/reply/`,{
      headers:{
        'Content-Type': 'application/json'
      },
      body:{errors:{}}
    });
    const expectedActions = [{
      type: ActionTypes.GET_COMMENT_REPLIES_FAIL,
      payload:{}
    }];
    const store = mockStore({ payload: [] });
    return store.dispatch(getCommentReplies({
      slug:'fake-slug',
      commentId:1,
    })).then(()=> {
      console.log(store.getActions())
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('should delete a comment reply successfully', () => {
    fetchMock.delete(`${BASE_URL}/articles/fake-slug/comments/1/reply/1`,{
      headers:{
        'Content-Type': 'application/json'
      },
      body:{message:'reply delete successfully'}
    });
    const expectedActions = [{
      type:ActionTypes.DELETE_COMMENT_START,
      reply_id:1,
    },{
      type:ActionTypes.DELETE_COMMENT_REPLY_SUCCESS,
    }
    ];
    const store = mockStore({ payload: [] });
    return store.dispatch(deleteCommentReplyAction({
      slug:'fake-slug',
      commentId:1,
      reply_id:parseInt(1)
    })).then(()=>
    {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
  it('should start update a comment reply', () => {
    fetchMock.put(`${BASE_URL}/articles/fake-slug/comments/1/reply/1/`,{
      headers:{
        'Content-Type': 'application/json'
      },
      body:{reply_body:""}
    });
    const expectedActions = [{
      type:ActionTypes.UPDATE_COMMENT_REPLY_BEGIN,
      body:'body',
      reply_id: 1
    }];
    const store = mockStore({ payload: [] });
    return store.dispatch(updateCommentReplyAction({
      slug:'fake-slug',
      commentId:1,
      reply_id:1,
      reply_body:'body'
    })).then(()=> {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('should update a comment reply successfully', () => {
    fetchMock.put(`${BASE_URL}/articles/fake-slug/comments/1/reply/1/`,{
      headers:{
        'Content-Type': 'application/json'
      },
      body:{data:{}}
    });
    const expectedActions = [ { type: ActionTypes.UPDATE_COMMENT_REPLY_BEGIN, body: 'body', reply_id: 1 },
      { type: ActionTypes.UPDATE_COMMENT_REPLY_SUCCESS } ]
    const store = mockStore({ payload: [] });
    return store.dispatch(updateCommentReplyAction({
      slug:'fake-slug',
      commentId:1,
      reply_id:1,
      reply_body:'body'
    })).then(()=> {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
  it('should handle fail to update a comment reply ', () => {
    fetchMock.put(`${BASE_URL}/articles/fake-slug/comments/1/reply/1/`,{
      headers:{
        'Content-Type': 'application/json'
      },
      body:{errors:{}}
    });
    const expectedActions = [ { type: ActionTypes.UPDATE_COMMENT_REPLY_BEGIN, body: '', reply_id: 1 },
      { type: ActionTypes.UPDATE_COMMENT_REPLY_FAIL, errors: {} }]
    const store = mockStore({ payload: [] });
    return store.dispatch(updateCommentReplyAction({
      slug:'fake-slug',
      commentId:1,
      reply_id:1,
      reply_body:''
    })).then(()=> {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });



})
