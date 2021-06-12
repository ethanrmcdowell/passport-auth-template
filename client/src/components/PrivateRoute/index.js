import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';

const PrivateRoute = props => {
  const isLoggedIn = useSelector(state => state.loggedIn);
  if (!isLoggedIn) {
    return <Redirect to='/' />;
  } else {
    return <Route path='/dashboard' component={Dashboard} />;
  }
};

export default PrivateRoute;
