import React, { createContext, useContext, useState } from 'react';
import { any } from 'prop-types';

import {
  eventsActions,
  storiesActions,
  bannersActions,
  speakersActions,
  programmingActions,
  partnersActions,
  sponsorCategoryActions,
  INITIAL_STATE,
} from './actions';

const EventContext = createContext(INITIAL_STATE);

export const useEvent = () => useContext(EventContext);

const EventProvider = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE);

  const changeState = ({ tab, value }) => {
    setState({
      ...state,
      [tab]: value,
    });
  };

  const setContext = ({ tab, value }) => {
    changeState({ tab, value });
  };

  const actions = {
    events: eventsActions(state, changeState),
    stories: storiesActions(state, changeState),
    banners: bannersActions(state, changeState),
    speakers: speakersActions(state, changeState),
    programming: programmingActions(state, changeState),
    partners: partnersActions(state, changeState),
    sponsorCategory: sponsorCategoryActions(state, changeState),
    setContext,
  };

  const value = { state, actions };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};

EventProvider.propTypes = {
  children: any.isRequired,
};

export default React.memo(EventProvider);
