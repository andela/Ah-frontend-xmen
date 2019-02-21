import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginView from '../views/LoginView';
import HomeView from '../views/HomeView';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact strict component={HomeView} />
      <Route path="/login" exact strict component={LoginView} />
      <Footer />
    </div>
  </Router>
);

export default Routes;
