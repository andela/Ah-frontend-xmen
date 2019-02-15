import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginView from '../views/LoginView';
import HomeView from '../views/HomeView';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import PasswordResetView from '../views/PasswordResetView';
import ProfileView from '../views/ProfileView';
import UpdateView from '../views/UpdateView';


const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact strict component={HomeView} />
      <Route path="/login" exact strict component={LoginView} />
      <Route path="/password-reset" exact strict component={PasswordResetView} />
      <Route path="/password-reset/:token" exact strict component={PasswordResetView} />
      <Route path="/profile" exact strict component={ProfileView} />
      <Route path="/profile/edit" exact strict component={UpdateView} />
      <Footer />
    </div>
  </Router>
);

export default Routes;
