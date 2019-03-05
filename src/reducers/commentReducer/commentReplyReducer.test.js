import ActionTypes from '../../actions/ActionTypes';
import commentReplyReducer from './commentReplyReducer';

describe('CommentReplyReducer', () => {
  it('should return initial state', () => {
    expect(commentReplyReducer(undefined,{})).toEqual({
      isSuccessful: false,
      payload:[],
      repliesCount:"",
      replyCreateSuccess:false,
      replyDeleteSuccess:false,
      replyUpdateSuccess:false,
      errors:""
    })
  });
  it('should perform an update on a comment reply body', () => {
    expect(commentReplyReducer({
      payload:[{
        id:1
      }]
    },{
      type:ActionTypes.UPDATE_COMMENT_REPLY_BEGIN,
      reply_id:1,
      body:'body update'
    })).toEqual({payload:[{
      id:1,
        reply_body: 'body update'
      }]})
  });

  it('should perform a deletion of a comment', () => {
    expect(commentReplyReducer({
      payload:[{
        id:1 }]
    },{
      type:ActionTypes.DELETE_COMMENT_START,
      reply_id:1,
    })).toEqual({payload:[]})
  });
  it('should update state on create comment reply fail', () => {
    expect(commentReplyReducer({},{
      type:ActionTypes.CREATE_COMMENT_REPLY_FAIL,
      errors:{},
    })).toEqual({errors: {}, replyCreateSuccess: false})
  });
  it('should update state on create comment reply success', () => {
    expect(commentReplyReducer({},{
      type:ActionTypes.CREATE_COMMENT_REPLY_SUCCESS,
      errors:{},
    })).toEqual({replyCreateSuccess: true})
  });
  it('should update state on get comment reply success', () => {
    expect(commentReplyReducer({},{
      type:ActionTypes.GET_COMMENT_REPLIES_SUCCESS,
      payload:[],
      replyCount:0
    })).toEqual({ isSuccessful: true,
      payload: [],
      repliesCount:0})
  });

  it('should update state on get comment reply fail', () => {
    expect(commentReplyReducer({},{
      type:ActionTypes.GET_COMMENT_REPLIES_FAIL,
      payload:[],
    })).toEqual({ isSuccessful: false,
      payload: []})
  });

  it('should update state on get comment reply fail', () => {
    expect(commentReplyReducer({},{
      type:ActionTypes.DELETE_COMMENT_REPLY_SUCCESS,
    })).toEqual({ replyDeleteSuccess: true})
  });
  it('should update state on get comment reply fail', () => {
    expect(commentReplyReducer({},{
      type:ActionTypes.DELETE_COMMENT_REPLY_SUCCESS,
    })).toEqual({ replyDeleteSuccess: true})
  });
  it('should update state on get comment reply fail', () => {
    expect(commentReplyReducer({},{
      type:ActionTypes.DELETE_COMMENT_REPLY_FAIL,
    })).toEqual({ replyDeleteSuccess: false})
  });
  it('should update state on get comment reply update success', () => {
    expect(commentReplyReducer({},{
      type:ActionTypes.UPDATE_COMMENT_REPLY_SUCCESS,
    })).toEqual({ replyUpdateSuccess: true})
  });


})
