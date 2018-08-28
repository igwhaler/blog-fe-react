import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import HomePage from './view/HomePage/index.jsx'
import ArtDetail from './view/ArtDetail/index.jsx'
import Others from './view/Others/index.jsx'
import NotMatch from './components/NotMatch/index.jsx'

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
