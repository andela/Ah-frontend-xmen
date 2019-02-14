import ActionTypes from '../ActionTypes';

const userToken = localStorage.getItem('token');
const { BASE_URL } = process.env;

export const CreateArticle = payload => dispatch => fetch(`${BASE_URL}/articles/`, {
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify(payload),
  headers: {
    Authorization: `Bearer ${userToken}`,
    'content-type': 'application/json',
  },
})
  .then(response => response.json())
  .then(
    (data) => {
      if (data.articles.errors) {
        dispatch({
          type: ActionTypes.CREATE_ARTICLE_FALIURE,
          payload: data.articles.errors,
        });
      } else {
        dispatch({
          type: ActionTypes.CREATE_ARTICLE_SUCCESS,
          payload: data.articles,
        });
      }
    },
  );

export const EditArticle = (slug, payload) => dispatch => fetch(`${BASE_URL}/articles/${slug}/`, {
  method: 'PUT',
  mode: 'cors',
  body: JSON.stringify(payload),
  headers: {
    Authorization: `Bearer ${userToken}`,
    'content-type': 'application/json',
  },
})
  .then(response => response.json())
  .then(
    (data) => {
      if (data.articles.errors) {
        dispatch({
          type: ActionTypes.EDIT_ARTICLE_FALIURE,
          payload: data.articles.errors,
        });
      } else {
        dispatch({
          type: ActionTypes.EDIT_ARTICLE_SUCCESS,
          payload: data.articles,
        });
      }
    },
  );


export const DeleteArticle = slug => dispatch => fetch(`${BASE_URL}/articles/${slug}/`, {
  method: 'DELETE',
  mode: 'cors',
  headers: {
    Authorization: `Bearer ${userToken}`,
  },
})
  .then(response => response.json())
  .then(
    (data) => {
      if (data.articles.message === 'Article successfully deleted') {
        dispatch({
          type: ActionTypes.DELETE_ARTICLE_SUCCESS,
          payload: data.articles.message,
        });
      }
    },
  );
