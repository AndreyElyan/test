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

export const DEFAULTS_TRAILS = [
  { color: '#ffffff', title: '', isOpenColors: false },
  { color: '#ffffff', title: '', isOpenColors: false },
  { color: '#ffffff', title: '', isOpenColors: false },
];

const DEFATULT_EVENTS = {
  title: '',
  days: [],
  status: '',
  trails: DEFAULTS_TRAILS,
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
  speakerCategoryId: [],
  mediatorCategoryId: [],
  personCategories: [],
  trackId: '',
  categoryId: '',
  image: '',
};

export const DEFAULT_PARTNERS = {
  name: '',
  description: '',
  videoUrl: '',
  siteUrl: '',
  isExhibitor: false,
  sponsorCategoryId: '',
  videoThumb: '',
  logo: '',
};

export const DEFAULT_SPONSORCATEGORY = {
  title: '',
  order: '',
};

export const INITIAL_STATE = {
  events: DEFATULT_EVENTS,
  stories: DEFAULT_STORY,
  banners: DEFAULT_BANNER,
  speakers: DEFAULT_SPEAKER,
  programming: DEFAULT_PROGRAMMING,
  partners: DEFAULT_PARTNERS,
  sponsorCategory: DEFAULT_SPONSORCATEGORY,
};

export const storiesActions = (state, setState) => ({
  addNewStory: () => {
    const stories = [...state.stories, DEFAULT_STORY[0]];
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

  setColor: ({ value, index }) => {
    const events = {
      ...state.events,
      trails: state.events.trails.map((trail, indexTrail) => {
        if (indexTrail !== index) {
          return trail;
        }

        return {
          ...trail,
          color: value,
          isOpenColors: false,
        };
      }),
    };

    setState({ tab: 'events', value: events });
  },

  toggleIsOpenColors: ({ value, index }) => {
    const events = {
      ...state.events,
      trails: state.events.trails.map((trail, indexTrail) => {
        if (indexTrail !== index) {
          return trail;
        }

        return {
          ...trail,
          isOpenColors: value,
        };
      }),
    };

    setState({ tab: 'events', value: events });
  },

  setTitleTrails: ({ value, index }) => {
    const events = {
      ...state.events,
      trails: state.events.trails.map((trail, indexTrail) => {
        if (indexTrail !== index) {
          return trail;
        }

        return {
          ...trail,
          title: value,
        };
      }),
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

    setState({ tab: 'speakers', value: speakers });
  },

  setImage: image => {
    const speakers = {
      ...state.speakers,
      image,
    };

    setState({ tab: 'speakers', value: speakers });
  },

  setDescription: description => {
    const speakers = {
      ...state.speakers,
      description,
    };

    setState({ tab: 'speakers', value: speakers });
  },

  setLinkedin: linkedin => {
    const speakers = {
      ...state.speakers,
      linkedin,
    };

    setState({ tab: 'speakers', value: speakers });
  },
});

export const programmingActions = (state, setState) => ({
  setTitle: title => {
    const programming = {
      ...state.programming,
      title,
    };

    setState({ tab: 'programming', value: programming });
  },

  setSubTitle: subTitle => {
    const programming = {
      ...state.programming,
      subTitle,
    };

    setState({ tab: 'programming', value: programming });
  },

  setDate: date => {
    const programming = {
      ...state.programming,
      date,
    };

    setState({ tab: 'programming', value: programming });
  },

  setStartTime: startTime => {
    const programming = {
      ...state.programming,
      startTime,
    };

    setState({ tab: 'programming', value: programming });
  },

  setEndTime: endTime => {
    const programming = {
      ...state.programming,
      endTime,
    };

    setState({ tab: 'programming', value: programming });
  },

  setDescription: description => {
    const programming = {
      ...state.programming,
      description,
    };

    setState({ tab: 'programming', value: programming });
  },

  setSpeakerCategoryId: speakerCategoryId => {
    const programming = {
      ...state.programming,
      speakerCategoryId,
    };

    setState({ tab: 'programming', value: programming });
  },

  setMediatorCategoryId: mediatorCategoryId => {
    const programming = {
      ...state.programming,
      mediatorCategoryId,
    };

    setState({ tab: 'programming', value: programming });
  },

  setTrackId: trackId => {
    const programming = {
      ...state.programming,
      trackId,
    };

    setState({ tab: 'programming', value: programming });
  },

  setCategoryId: categoryId => {
    const programming = {
      ...state.programming,
      categoryId,
    };

    setState({ tab: 'programming', value: programming });
  },

  setImage: image => {
    const programming = {
      ...state.programming,
      image,
    };

    setState({ tab: 'programming', value: programming });
  },
});

export const partnersActions = (state, setState) => ({
  setName: name => {
    const partners = {
      ...state.partners,
      name,
    };

    setState({ tab: 'partners', value: partners });
  },

  setDescription: description => {
    const partners = {
      ...state.partners,
      description,
    };

    setState({ tab: 'partners', value: partners });
  },

  setVideoUrl: videoUrl => {
    const partners = {
      ...state.partners,
      videoUrl,
    };

    setState({ tab: 'partners', value: partners });
  },

  setSiteUrl: siteUrl => {
    const partners = {
      ...state.partners,
      siteUrl,
    };

    setState({ tab: 'partners', value: partners });
  },

  setIsExhibitor: isExhibitor => {
    const partners = {
      ...state.partners,
      isExhibitor,
    };

    setState({ tab: 'partners', value: partners });
  },

  setSponsorCategoryId: sponsorCategory => {
    const partners = {
      ...state.partners,
      sponsorCategoryId: sponsorCategory.value,
    };

    setState({ tab: 'partners', value: partners });
  },

  setVideoThumb: videoThumb => {
    const partners = {
      ...state.partners,
      videoThumb,
    };

    setState({ tab: 'partners', value: partners });
  },

  setLogo: logo => {
    const partners = {
      ...state.partners,
      logo,
    };

    setState({ tab: 'partners', value: partners });
  },
});

export const sponsorCategoryActions = (state, setState) => ({
  addNewSponsor: () => {
    const sponsors = [...state.sponsors, DEFAULT_SPONSORCATEGORY];
    setState({ tab: 'partners', value: sponsors });
  },
  deleteSponsor: indexSponsor => {
    const sponsors = state.sponsors.filter(
      (sponsor, index) => indexSponsor !== index
    );
    setState({ tab: 'partners', value: sponsors });
  },
  editSponsor: ({ index, label, value }) => {
    const sponsor = state.sponsor[index];

    state.sponsors[index] = {
      ...sponsor,
      [label]: value,
    };

    const newSponsor = [...state.sponsors];

    setState({ tab: 'partners', value: newSponsor });
  },
});
