import ActionTypes from './ActionTypes';

const { BASE_URL } = process.env;
const token = localStorage.getItem('token');

const bookmarkListing = slug => dispatch => fetch(`${BASE_URL}/bookmarks`, {
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  },
}).then(response => response.json())
  .then((data) => {
    if (data.bookmarks) {
      dispatch({
        type: ActionTypes.BOOKMARK_LIST_FETCHED,
        payload: data.bookmarks,
        slug,
      });
    } else {
      dispatch({
        type: ActionTypes.BOOKMARK_LIST_EMPTY,
        message: 'You do not have any articles bookmarked',
      });
    }
  });

export default bookmarkListing;
