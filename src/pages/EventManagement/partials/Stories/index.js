import React, { useMemo, useEffect } from 'react';

import api from '../../../../services/api';

import Story from './Story';

import { useEvent } from '../../Context';

import { Container } from './styles';

export default function Stories({ match }) {
  const { id } = match.params;

  const { state, actions } = useEvent();
  const { stories } = state;

  const getStories = async () => {
    const { data } = await api.get(`/story?eventId=${id}`);

    if (data.length) {
      actions.setContext({
        tab: 'stories',
        value: data.map(story => {
          const content = story.contents[0];
          return {
            id: story.id,
            image: content.banner,
            colorPink: content.texts[0].text,
            colorWhite: content.texts[1].text,
          };
        }),
      });
    }
  };

  useEffect(() => {
    getStories();
  }, [id]);

  return useMemo(
    () => (
      <Container>
        {stories.map((story, index) => (
          <Story
            key={index}
            eventId={id}
            isLast={index === stories.length - 1}
            addNewStory={actions.stories.addNewStory}
            deleteStory={() => actions.stories.deleteStory(index)}
            editStory={({ label, value }) =>
              actions.stories.editStory({ index, label, value })
            }
            story={story}
          />
        ))}
      </Container>
    ),
    [stories, actions.stories]
  );
}
