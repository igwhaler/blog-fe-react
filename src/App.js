import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import IgwHeader from './components/IgwHeader'
import HomePage from './view/HomePage'
import ArtDetail from './view/ArtDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="blog-container">
          <IgwHeader />

          <Route exact path="/" component={HomePage} />
          <Route path="/article/:id" component={ArtDetail} />
          {/* <HomePage /> */}
        </div>
      </Router>
    );
  }
}

export default App;
