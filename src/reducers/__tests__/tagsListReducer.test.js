import tagsListReducer from '../tagsListReducer';
import ActionTypes from '../../actions/ActionTypes';


describe('tagsListReducer', () => {
  it('should return the initial State', () => {
    const initialState = {};
    expect(tagsListReducer(initialState, {})).toEqual({});
  });
  it('should return FETCH_TAGS_SUCCESS action', () => {
    const expectedState = {
      tags: [],
    };
    const action = {
      type: ActionTypes.FETCH_TAGS_SUCCESS,
      payload: [],
    };
    expect(tagsListReducer({}, action)).toEqual(expectedState);
  });
});
