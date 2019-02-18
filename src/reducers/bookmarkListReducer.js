import ActionTypes from '../actions/ActionTypes';

const initialState = {
  bookmarks: [],
  bookmarks_empty_message: '',
  isBookmarked: false,
};

const getIsBookmarked = (bookmarks, slug) => {
  const filtered = bookmarks.filter(bookmark => bookmark.slug === slug);
  return filtered.length > 0;
};

const bookmarkListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.BOOKMARK_LIST_FETCHED:
      return {
        ...state,
        bookmarks: action.payload,
        isBookmarked: getIsBookmarked(action.payload, action.slug),
      };
    case ActionTypes.BOOKMARK_SUCCESS:
      return {
        ...state, isBookmarked: true,
      };
    case ActionTypes.UNBOOKMARK_SUCCESS:
      return {
        ...state, isBookmarked: false,
      };
    default:
      return { ...state };
  }
};

export default bookmarkListReducer;
