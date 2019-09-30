import React, { createContext, useContext, useState } from 'react';

const DEFAULT_STORY = {
  image: null,
  colorWhite: '',
  colorPink: '',
};

const DEFAULT_BANNER = {
  image: null,
  title: '',
  subTitle: '',
};

const INITIAL_STATE = {
  stories: [DEFAULT_STORY],
  banners: [DEFAULT_BANNER],
};

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

  const actions = {
    events: {},
    stories: {
      addNewStory: () => {
        const stories = [...state.stories, DEFAULT_STORY];
        changeState({ tab: 'stories', value: stories });
      },
      deleteStory: indexStory => {
        const stories = state.stories.filter(
          (story, index) => indexStory !== index
        );
        changeState({ tab: 'stories', value: stories });
      },
      editStory: ({ index, label, value }) => {
        const story = state.stories[index];

        state.stories[index] = {
          ...story,
          [label]: value,
        };

        const newStories = [...state.stories];

        changeState({ tab: 'stories', value: newStories });
      },
    },

    banners: {
      addNewBanner: () => {
        const banners = [...state.banners, DEFAULT_BANNER];
        changeState({ tab: 'banners', value: banners });
      },
      deleteBanner: indexBanner => {
        const banners = state.banners.filter(
          (banner, index) => indexBanner !== index
        );
        changeState({ tab: 'banners', value: banners });
      },
      editBanner: ({ index, label, value }) => {
        const banner = state.banners[index];

        state.banners[index] = {
          ...banner,
          [label]: value,
        };

        const newBanners = [...state.banners];

        changeState({ tab: 'banners', value: newBanners });
      },
    },
  };

  const value = { state, actions };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};

export default EventProvider;
