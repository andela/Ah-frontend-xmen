import ActionTypes from '../ActionTypes';

const { BASE_URL } = process.env;
const token = localStorage.getItem('token');

const bookmarkArticle = (slug, state) => dispatch => fetch(`${BASE_URL}/articles/${slug}/bookmark`, {
  method: state ? 'DELETE' : 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  },
}).then(response => response.json())
  .then((data) => {
    if (data.bookmarks.errors) {
      dispatch({
        type: ActionTypes.BOOKMARK_FAILURE,
        error: data.bookmarks.errors,
      });
    } else if (state) {
      dispatch({
        type: ActionTypes.UNBOOKMARK_SUCCESS,
        message: data.bookmarks.message,
      });
    } else {
      dispatch({
        type: ActionTypes.BOOKMARK_SUCCESS,
        message: data.bookmarks.message,
      });
    }
  });

export default bookmarkArticle;
