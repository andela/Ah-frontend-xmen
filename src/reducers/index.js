import { combineReducers } from 'redux';
import fetchArticlesReducer from './fetchArticlesReducer';
import socialAuthReducer from './socialAuthReducer/socialAuthReducer';
import passwordResetReducer from './passwordResetReducer';
import signUpReducer from './signupReducer';

export default combineReducers({
  articles: fetchArticlesReducer,
  socialAuthReducer,
  passwordResetReducer,
  signUpReducer,
});
