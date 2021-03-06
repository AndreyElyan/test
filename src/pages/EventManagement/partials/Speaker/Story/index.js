import React, { memo } from 'react';

import ProductImage from '4all-ui/components/ProductImage';

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

function Story({ isLast, story, addNewStory, deleteStory, editStory }) {
  return (
    <WrapperStories>
      <header>
        <strong>Stories</strong>
      </header>
      <WrapperImage>
        <ProductImage
          emptyText="Imagem do Palestrante"
          size="150px"
          fontSize="15px"
          iconSize="50px"
          backgroundColor="#f9f9f9"
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
        <label htmlFor="upload-photo">
          Carregar Stories
          <input type="file" id="upload-photo" />
        </label>
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
            <ButtonAdd onClick={addNewStory}>
              <img src={Add} height={30} alt="add" />
              <strong>Mais stories</strong>
            </ButtonAdd>
          ) : (
            <ButtonDelete onClick={deleteStory}>
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
