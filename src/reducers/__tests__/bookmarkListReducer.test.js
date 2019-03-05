import ActionTypes from '../../actions/ActionTypes';
import bookmarkListReducer from '../bookmarkListReducer';

const initialState = {
  bookmarks: [],
  isBookmarked: undefined,
  bookmarks_empty_message: '',
};

describe('bookmarkListReducer', () => {
  it('should return the correct state for bookmarks fetched', () => {
    const action = {
      type: ActionTypes.BOOKMARK_LIST_FETCHED,
      payload: [{ title: 'dkekkd', slug: 'dededed' }],
    };
    const expectedState = {
      bookmarks: [{ title: 'dkekkd', slug: 'dededed' }],
      bookmarks_empty_message: '',
      isBookmarked: false,

    };
    expect(bookmarkListReducer(initialState, action)).toEqual(expectedState);
  });
  it('should return the correct state for bookmark success', () => {
    const action = {
      type: ActionTypes.BOOKMARK_SUCCESS,
      bookmarks: [],
    };
    const expectedState = {
      bookmarks: [],
      bookmarks_empty_message: '',
      isBookmarked: true,

    };
    expect(bookmarkListReducer(initialState, action)).toEqual(expectedState);
  });
  it('should return the correct state for unbookmark success', () => {
    const action = {
      type: ActionTypes.UNBOOKMARK_SUCCESS,
      bookmarks: [],
    };
    const expectedState = {
      bookmarks: [],
      bookmarks_empty_message: '',
      isBookmarked: false,

    };
    expect(bookmarkListReducer(initialState, action)).toEqual(expectedState);
  });
  it('should return the correct state for unidefined', () => {
    const action = {
      type: '',
      bookmarks: [],
    };
    const expectedState = {
      bookmarks: [],
      isBookmarked: undefined,
      bookmarks_empty_message: '',
    };
    expect(bookmarkListReducer(initialState, action)).toEqual(expectedState);
  });
});
