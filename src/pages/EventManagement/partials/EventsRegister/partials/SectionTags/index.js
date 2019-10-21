import React, { useState, useEffect } from 'react';
import Tag from '4all-ui/components/Tag';

import api from '../../../../../../services/api';

import { useEvent } from '../../../../Context/index';

import Right from '../../../../../../components/Icons/Right';
import Input from '../../../../../../components/Input';

import { WrapperTags, WrapperInterest, ContentTags } from './styles';

const SectionTags = ({ eventId }) => {
  const [inputTags, setInputTags] = useState('');
  const [tags, setTags] = useState([]);

  const getTags = async () => {
    const { data } = await api.get(`/interest?eventId=${eventId}`);
    setTags(data);
  };

  useEffect(() => {
    getTags();
  }, [eventId]);

  const submitAddTag = async event => {
    if (event) event.preventDefault();

    if (inputTags.trim() === '') return false;

    if (!tags.find(tag => tag.title === inputTags)) {
      tags.push({ title: inputTags });
      setTags(tags);

      await api.post(`/interest?eventId=${eventId}`, { title: inputTags });
    }

    setInputTags('');
  };

  const removeTag = async index => {
    const tag = tags[index];
    setTags(tags.filter(tagIndex => tagIndex !== index));
    await api.delete(`/interest/${tag.id}?eventId=${eventId}`);
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
            key={`${tag.title}-${index}`}
            onChange={eventsActions.setTags}
            value={events.tags}
          >
            {tag.title}
          </Tag>
        ))}
      </ContentTags>
    </WrapperTags>
  );
};

export default SectionTags;
