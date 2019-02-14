import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeView from '../views/HomeView';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact strict component={HomeView} />
      <Footer />
    </div>
  </Router>
);

export default Routes;
