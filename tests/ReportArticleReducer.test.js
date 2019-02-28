
import reportReducer from '../src/reducers/reportReducer';
import * as actions from '../src/actions/ActionTypes';


const initialState = {};
describe('Report Reducer', () => {
  it('should return initial state', () => {
    expect(reportReducer(initialState, {})).toEqual(initialState);
  });
  it('should handle REPORT_ARTICLE_SUCEEDS', () => {
    const action = {
      type: actions.REPORT_ARTICLE_SUCCEEDS,
      payload: 'text',
    };
    expect(reportReducer(initialState, action)).toEqual({
      loading: false,
      reason: 'text',
    });
  });
  it('should handle REPORT_ARTICLE_FAILS', () => {
    const action = {
      type: actions.REPORT_ARTICLE_FAILS,
      error: 'text',

    };
    expect(reportReducer(initialState, action)).toEqual({
      loading: false,
      reason: '',
    });
  });
});
