import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginView from '../views/LoginView';
import HomeView from '../views/HomeView';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import PasswordResetView from '../views/PasswordResetView';


const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact strict component={HomeView} />
      <Route path="/login" exact strict component={LoginView} />
      <Route path="/password-reset" exact strict component={PasswordResetView} />
      <Route path="/password-reset/:token" exact strict component={PasswordResetView} />
      <Footer />
    </div>
  </Router>
);

export default Routes;
