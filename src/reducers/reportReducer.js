import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  loading: false,
  error: null,
  reason: '',
};

function reportReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REPORT_ARTICLE_SUCCEEDS:
      return {
        ...state,
        loading: false,
        reason: action.payload,
      };
    case ActionTypes.REPORT_ARTICLE_FAILS:
      return {
        ...state,
        loading: false,
        error: action.payload,
        reason: '',
      };
    default:
      return state;
  }
}
export default reportReducer;
