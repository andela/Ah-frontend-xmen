import ActionTypes from '../ActionTypes';

const { BASE_URL } = process.env;

const fetchAllTags = () => dispatch => fetch(`${BASE_URL}/tags`, {
  method: 'GET',
  mode: 'cors',
})
  .then(resp => resp.json())
  .then((data) => {
    dispatch({
      type: ActionTypes.FETCH_TAGS_SUCCESS,
      payload: data.tags,
    });
  });

export default fetchAllTags;
