import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "assests/scss/style.scss"
import LandingPage from 'pages/LandingPage'
import DetailsPage from 'pages/DetailPage'
import Checkout from 'pages/Checkout'
import Example from 'pages/Example';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/aaaaaa" component={Example} />
      </Router>
    </div>
  );
}

export default App;
