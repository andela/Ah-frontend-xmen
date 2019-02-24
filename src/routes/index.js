import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeView from '../views/HomeView';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import PasswordResetView from '../views/PasswordResetView';
import ProfileView from '../views/ProfileView';
import UpdateView from '../views/UpdateView';
import ReportArticleView from '../views/ReportArticleView';
import ArticleReadView from '../views/ArticleReadView';
import EditArticleView from '../views/articleEditorView/EditArticleView';
import CreateArticleView from '../views/articleEditorView/CreateArticleView';
import ProfileListView from '../views/ProfileListView';


const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact strict component={HomeView} />
      <Route path="/password-reset" exact strict component={PasswordResetView} />
      <Route path="/password-reset/:token" exact strict component={PasswordResetView} />
      <Route path="/profile" exact strict component={ProfileView} />
      <Route path="/profiles/:username" exact strict component={ProfileView} />
      <Route path="/profile/edit" exact strict component={UpdateView} />
      <Route path="/article/:slug" exact strict component={ArticleReadView} />
      <Route path="/article/:slug/report" exact strict component={ReportArticleView} />
      <Route path="/editor" exact strict component={CreateArticleView} />
      <Route path="/editor/:slug" exact strict component={EditArticleView} />
      <Route path="/profiles/:username/following" exact strict component={ProfileListView} />
      <Route path="/profiles/:username/followers" exact strict component={ProfileListView} />
      <Route path="/who_to_follow" exact strict component={ProfileListView} />
      <Footer />
    </div>
  </Router>
);
export default Routes;
