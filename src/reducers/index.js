import { combineReducers } from 'redux';
import fetchArticlesReducer from './fetchArticlesReducer';
import socialAuthReducer from './socialAuthReducer/socialAuthReducer';

export default combineReducers({
  articles: fetchArticlesReducer,
  socialAuthReducer,

});
