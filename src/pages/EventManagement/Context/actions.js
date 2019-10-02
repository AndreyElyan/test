const DEFAULT_STORY = [
  {
    image: null,
    colorWhite: '',
    colorPink: '',
  },
];

const DEFAULT_BANNER = [
  {
    image: null,
    title: '',
    subTitle: '',
  },
];

const DEFATULT_EVENTS = {
  title: '',
  days: [],
  status: '',
  trails: '',
  tags: [],
};

export const INITIAL_STATE = {
  events: DEFATULT_EVENTS,
  stories: DEFAULT_STORY,
  banners: DEFAULT_BANNER,
};

export const storiesActions = (state, setState) => ({
  addNewStory: () => {
    const stories = [...state.stories, DEFAULT_STORY];
    setState({ tab: 'stories', value: stories });
  },
  deleteStory: indexStory => {
    const stories = state.stories.filter(
      (story, index) => indexStory !== index
    );
    setState({ tab: 'stories', value: stories });
  },
  editStory: ({ index, label, value }) => {
    const story = state.stories[index];

    state.stories[index] = {
      ...story,
      [label]: value,
    };

    const newStories = [...state.stories];

    setState({ tab: 'stories', value: newStories });
  },
});

export const bannersActions = (state, setState) => ({
  addNewBanner: () => {
    const banners = [...state.banners, DEFAULT_BANNER];
    setState({ tab: 'banners', value: banners });
  },
  deleteBanner: indexBanner => {
    const banners = state.banners.filter(
      (banner, index) => indexBanner !== index
    );
    setState({ tab: 'banners', value: banners });
  },
  editBanner: ({ index, label, value }) => {
    const banner = state.banners[index];

    state.banners[index] = {
      ...banner,
      [label]: value,
    };

    const newBanners = [...state.banners];

    setState({ tab: 'banners', value: newBanners });
  },
});

export const eventsActions = (state, setState) => ({
  setTitle: title => {
    const events = {
      ...state.events,
      title,
    };

    setState({ tab: 'events', value: events });
  },

  setDays: days => {
    const events = {
      ...state.events,
      days,
    };

    setState({ tab: 'events', value: events });
  },

  setStatus: status => {
    const events = {
      ...state.events,
      status,
    };

    setState({ tab: 'events', value: events });
  },

  setColor: trails => {
    const events = {
      ...state.events,
      trails,
    };

    setState({ tab: 'events', value: events });
  },

  setTags: tags => {
    const events = {
      ...state.events,
      tags,
    };

    setState({ tab: 'events', value: events });
  },
});
