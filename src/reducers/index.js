import { combineReducers } from 'redux';
import fetchArticlesReducer from './fetchArticlesReducer';
import loginReducer from './loginReducer';
import socialAuthReducer from './socialAuthReducer/socialAuthReducer';
import passwordResetReducer from './passwordResetReducer';
import signUpReducer from './signupReducer';
import profileReducer from './profileReducer';
import articleReducer from './articleReducer';
import commentReducer from './commentReducer/commentReducer';
import authReducer from './authReducer';
import likeArticleReducer from './LikeArticleReducer';
import reportReducer from './reportReducer';
import articleEditorReducer from './articleEditorReducer';
import likeCommentReducer from './commentReducer/likeCommentsReducer';

export default combineReducers({
  articles: fetchArticlesReducer,
  socialAuthReducer,
  passwordResetReducer,
  signUpReducer,
  profileReducer,
  articleReducer,
  loginReducer,
  comments: commentReducer,
  Auth: authReducer,
  likeArticleReducer,
  reportReducer,
  articleEditorReducer,
  likeCommentReducer,
});
