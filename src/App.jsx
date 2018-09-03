import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import HomePage from './view/HomePage'
import ArtDetail from './view/ArtDetail'
import Others from './view/Others'
import NotMatch from './components/NotMatch'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/blog/artlist"></Redirect>

          <Route path="/blog/artlist" component={HomePage} />
          <Route path="/blog/article/:id" component={ArtDetail} />

          <Route path="/others">
            <Others />
          </Route>

          <Route component={NotMatch}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
