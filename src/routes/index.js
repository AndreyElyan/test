import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import PrivateRoute from './PrivateRoute';

import SignIn from '../pages/SignIn';
import NewPassword from '../pages/NewPassword';
// import ForgotPassword from '../pages/ForgotPassword';

import Dashboard from '../pages/Dashboard';
import EventManagement from '../pages/EventManagement';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Dashboard} isPrivate />
      <Route path="/login" exact component={SignIn} />
      <Route path="/newPassword" exact component={NewPassword} />

      <Route path="/events/:id" component={EventManagement} isPrivate />
    </Switch>
  );
}
