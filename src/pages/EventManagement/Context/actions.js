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

const DEFAULT_SPEAKER = {
  name: '',
  profileImage: '',
  description: '',
  linkedin: '',
};

const DEFAULT_PROGRAMMING = {
  title: '',
  subTitle: '',
  startTime: '',
  endTime: '',
  description: '',
  personCategories: '',
  trackId: '',
  categoryId: '',
  image: '',
};

export const DEFAULT_PARTNERS = {
  partners: {
    name: '',
    description: '',
    videoUrl: '',
    siteUrl: '',
    isExhibitor: false,
    sponsorCategoryId: '',
    videoThumb: '',
    logo: '',
  },

  sponsorCategory: {
    title: '',
    order: 0,
  },
};

export const INITIAL_STATE = {
  events: DEFATULT_EVENTS,
  stories: DEFAULT_STORY,
  banners: DEFAULT_BANNER,
  speakers: DEFAULT_SPEAKER,
  programming: DEFAULT_PROGRAMMING,
  partners: DEFAULT_PARTNERS,
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

export const speakersActions = (state, setState) => ({
  setName: name => {
    const speakers = {
      ...state.speakers,
      name,
    };

    setState({ tab: 'events', value: speakers });
  },

  setImage: image => {
    const speakers = {
      ...state.speakers,
      image,
    };

    setState({ tab: 'events', value: speakers });
  },

  setDescription: description => {
    const speakers = {
      ...state.speakers,
      description,
    };

    setState({ tab: 'events', value: speakers });
  },

  setLinkedin: linkedin => {
    const speakers = {
      ...state.speakers,
      linkedin,
    };

    setState({ tab: 'events', value: speakers });
  },
});

export const programmingActions = (state, setState) => ({
  setTitle: title => {
    const programming = {
      ...state.programming,
      title,
    };

    setState({ tab: 'events', value: programming });
  },

  setSubTitle: subTitle => {
    const programming = {
      ...state.programming,
      subTitle,
    };

    setState({ tab: 'events', value: programming });
  },

  setStartTime: startTime => {
    const programming = {
      ...state.programming,
      startTime,
    };

    setState({ tab: 'events', value: programming });
  },

  setEndTime: endTime => {
    const programming = {
      ...state.programming,
      endTime,
    };

    setState({ tab: 'events', value: programming });
  },

  setDescription: description => {
    const programming = {
      ...state.programming,
      description,
    };

    setState({ tab: 'events', value: programming });
  },

  setPersonCategories: personCategories => {
    const programming = {
      ...state.programming,
      personCategories,
    };

    setState({ tab: 'events', value: programming });
  },

  setTrackId: trackId => {
    const programming = {
      ...state.programming,
      trackId,
    };

    setState({ tab: 'events', value: programming });
  },

  setCategoryId: categoryId => {
    const programming = {
      ...state.programming,
      categoryId,
    };

    setState({ tab: 'events', value: programming });
  },

  setImage: image => {
    const programming = {
      ...state.programming,
      image,
    };

    setState({ tab: 'events', value: programming });
  },
});

export const partnersActions = (state, setState) => ({
  setName: name => {
    const partners = {
      ...state.partners,
      name,
    };

    setState({ tab: 'events', value: partners });
  },

  setDescription: description => {
    const partners = {
      ...state.partners,
      description,
    };

    setState({ tab: 'events', value: partners });
  },

  setVideoUrl: videoUrl => {
    const partners = {
      ...state.partners,
      videoUrl,
    };

    setState({ tab: 'events', value: partners });
  },

  setSiteUrl: siteUrl => {
    const partners = {
      ...state.partners,
      siteUrl,
    };

    setState({ tab: 'events', value: partners });
  },

  setIsExhibitor: isExhibitor => {
    const partners = {
      ...state.partners,
      isExhibitor,
    };

    setState({ tab: 'events', value: partners });
  },

  setSponsorCategoryId: sponsorCategoryId => {
    const partners = {
      ...state.partners,
      sponsorCategoryId,
    };

    setState({ tab: 'events', value: partners });
  },

  setVideoThumb: videoThumb => {
    const partners = {
      ...state.partners,
      videoThumb,
    };

    setState({ tab: 'events', value: partners });
  },

  setLogo: logo => {
    const partners = {
      ...state.partners,
      logo,
    };

    setState({ tab: 'events', value: partners });
  },
});
