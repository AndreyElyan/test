import React, { useMemo } from 'react';

import Story from './Story';

import { useEvent } from '../../Context';

import { Container } from './styles';

export default function Stories() {
  const { state, actions } = useEvent();
  const { stories } = state;

  return useMemo(
    () => (
      <Container>
        {stories.map((story, index) => (
          <Story
            key={index}
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
