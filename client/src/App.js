import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './style.css';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute />
      </Switch>
    </Router>
  );
}

export default App;
