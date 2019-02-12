import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import Header from '../components/Header';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact strict component={HomeView} />
      <Route path="/login" exact strict component={LoginView} />
    </div>
  </Router>
);

export default Routes;
