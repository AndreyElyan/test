import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';

import { isAuthenticated } from '../helpers/auth';
import { error } from '../services/notifier';

const redirectAlert = prop => {
  error('Acesso restrito, volte quando estiver logado.');
  prop.history.push('/login');
};

const PrivateRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={prop => {
      return isAuthenticated() ? (
        <DefaultLayout history={prop.history}>
          <Component {...prop} />
        </DefaultLayout>
      ) : (
        redirectAlert(prop)
      );
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default PrivateRoute;
