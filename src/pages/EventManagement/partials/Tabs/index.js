import React from 'react';
import { Switch } from 'react-router-dom';

import Event from '../EventsRegister';
import Stories from '../Stories';
import Speaker from '../Speaker';
import Programming from '../Programming';
import Partners from '../Partners';
import BannerActions from '../BannerActions';
import Participants from '../Participants';

import Route from '../../../../routes/Route';

export default function Tabs() {
  return (
    <Switch>
      <Route path="/events/:id/" exact component={Event} />
      <Route path="/events/:id/stories" exact component={Stories} />
      <Route path="/events/:id/speakers" exact component={Speaker} />
      <Route path="/events/:id/programation" exact component={Programming} />
      <Route path="/events/:id/partners" exact component={Partners} />
      <Route
        path="/events/:id/banner-actions"
        exact
        component={BannerActions}
      />
      <Route path="/events/:id/participants" exact component={Participants} />
    </Switch>
  );
}
