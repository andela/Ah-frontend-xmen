import { combineReducers } from 'redux';
import fetchArticlesReducer from './fetchArticlesReducer';
import socialAuthReducer from './socialAuthReducer/socialAuthReducer';
import passwordResetReducer from './passwordResetReducer';
import signUpReducer from './signupReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  articles: fetchArticlesReducer,
  socialAuthReducer,
  passwordResetReducer,
  signUpReducer,
  profileReducer,
});
