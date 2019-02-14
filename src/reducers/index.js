import { combineReducers } from 'redux';
import fetchArticlesReducer from './fetchArticlesReducer';

export default combineReducers({
  articles: fetchArticlesReducer,
});
