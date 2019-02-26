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

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact strict component={HomeView} />
      <Route path="/password-reset" exact strict component={PasswordResetView} />
      <Route path="/password-reset/:token" exact strict component={PasswordResetView} />
      <Route path="/profile" exact strict component={ProfileView} />
      <Route path="/profile/edit" exact strict component={UpdateView} />
      <Route path="/article/:slug" exact strict component={ArticleReadView} />
      <Route path="/article/:slug/report" exact strict component={ReportArticleView} />
      <Footer />

    </div>
  </Router>
);
export default Routes;
