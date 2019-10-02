import React, { useState } from 'react';
import Tag from '4all-ui/components/Tag';

import { useEvent } from '../../../../Context/index';

import Right from '../../../../../../components/Icons/Right';
import Input from '../../../../../../components/Input';

import { WrapperTags, WrapperInterest, ContentTags } from './styles';

const SectionTags = () => {
  const [inputTags, setInputTags] = useState('');
  const [tags, setTags] = useState([]);

  const submitAddTag = event => {
    if (event) event.preventDefault();

    if (inputTags.trim() === '') return false;

    if (!tags.find(tag => tag.label === inputTags)) {
      tags.push({ label: inputTags });
      setTags(tags);
    }

    setInputTags('');
  };

  const removeTag = index => {
    setTags(tags.filter((tag, tagIndex) => tagIndex !== index));
  };

  const { state, actions } = useEvent();
  const { events } = state;
  const { events: eventsActions } = actions;

  return (
    <WrapperTags>
      <header>
        <strong>Interesses(Tags)</strong>
      </header>

      <WrapperInterest onSubmit={submitAddTag}>
        <Input
          height="45px"
          width="300px"
          type="text"
          placeholder="Adicione uma Tag"
          value={inputTags}
          onChange={setInputTags}
        />
        <img src={<Right />} alt="" />
      </WrapperInterest>

      <ContentTags>
        {tags.map((tag, index) => (
          <Tag
            bgColor="transparent"
            color="#333"
            border="1px solid #E4E4E4"
            onRemoveTag={() => removeTag(index)}
            iconColor="#979797"
            key={`${tag.label}-${index}`}
            onChange={eventsActions.setTags}
            value={events.tags}
          >
            {tag.label}
          </Tag>
        ))}
      </ContentTags>
    </WrapperTags>
  );
};

export default SectionTags;
