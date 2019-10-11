import React, { memo, useState, useEffect } from 'react';
import image2base64 from 'image-to-base64';

import api from '../../../../../services/api';

import PickerImage from '../../../../../components/Picker/Image';

import Input from '../../../../../components/Input';

import Add from '../add.svg';
import trash from '../../../../../assets/button/trash.svg';

import {
  WrapperStories,
  WrapperImage,
  LabelWrapper,
  WrapperText,
  WrapperButton,
  ButtonAdd,
  ButtonDelete,
} from './styles';

function Story({
  eventId,
  isLast,
  story,
  addNewStory,
  deleteStory,
  editStory,
}) {
  const [preview, setPreview] = useState('');

  async function handleChangeImage(e) {
    const file = e.target.files[0];

    if (file) {
      const imagePreview = URL.createObjectURL(file);
      setPreview(imagePreview);

      const image = await image2base64(imagePreview);
      editStory({ label: 'image', value: image });
    }
  }

  const submitAddStory = async () => {
    await api.post(`/story?eventId=${eventId}`, {
      contents: [
        {
          texts: [
            {
              text: story.colorWhite,
              color: 'white',
              style: 'bold',
            },
            {
              text: story.colorPink,
              color: 'pink',
              style: 'regular',
            },
          ],
          banner: `data:image/png;base64,${story.image}`,
        },
      ],
    });
  };

  const addStories = () => {
    if (!story.id) submitAddStory();
    addNewStory();
  };

  const submitDeleteStory = async () => {
    await api.delete(`/story/${story.id}/?eventId=${eventId}`);
  };

  const handleDeleteStory = () => {
    submitDeleteStory();
    deleteStory();
  };

  return (
    <WrapperStories>
      <header>
        <strong>Stories</strong>
      </header>
      <WrapperImage>
        <PickerImage
          handleChange={handleChangeImage}
          preview={preview || story.image}
        />
        <LabelWrapper>
          <div>
            <strong>JPEG,JPG</strong>
            <strong>ou PNG</strong>
          </div>
          <span>
            <strong>Máximo</strong>
            <strong>de 2Mb</strong>
          </span>
        </LabelWrapper>
      </WrapperImage>
      <WrapperText>
        <Input
          className="whiteColorAdd"
          height="45px"
          width="850px"
          label="Cor Branca"
          value={story.colorWhite}
          onChange={value => editStory({ label: 'colorWhite', value })}
        />

        <Input
          className="pinkColorAdd"
          height="45px"
          width="850px"
          label="Cor Rosa"
          value={story.colorPink}
          onChange={value => editStory({ label: 'colorPink', value })}
        />

        <WrapperButton>
          {isLast ? (
            <ButtonAdd onClick={addStories}>
              <img src={Add} height={30} alt="add" />
              <strong>Mais stories</strong>
            </ButtonAdd>
          ) : (
            <ButtonDelete onClick={handleDeleteStory}>
              <img src={trash} height={30} alt="add" />
              <strong>Apagar Stories</strong>
            </ButtonDelete>
          )}
        </WrapperButton>
      </WrapperText>
    </WrapperStories>
  );
}

export default memo(Story);
