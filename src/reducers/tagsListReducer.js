import ActionTypes from '../actions/ActionTypes';

const initialState = {
  tags: [],
};

const tagsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return { ...state };
  }
};

export default tagsListReducer;
