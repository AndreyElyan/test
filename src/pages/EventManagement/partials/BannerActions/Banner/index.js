import React, { memo } from 'react';

import Input from '../../../../../components/Input';
import PickerImage from '../../../../../components/Picker/Image';

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

function Banner({ isLast, banner, addNewBanner, deleteBanner, editBanner }) {
  return (
    <WrapperStories>
      <header>
        <strong>Stories</strong>
      </header>
      <WrapperImage>
        <PickerImage />
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
          height="45px"
          width="850px"
          label="Título"
          value={banner.title}
          onChange={value => editBanner({ label: 'title', value })}
        />

        <Input
          height="45px"
          width="850px"
          label="Sub Título"
          value={banner.subTitle}
          onChange={value => editBanner({ label: 'subTitle', value })}
        />

        <WrapperButton>
          {isLast ? (
            <ButtonAdd onClick={addNewBanner}>
              <img src={Add} height={30} alt="add" />
              <strong>Mais stories</strong>
            </ButtonAdd>
          ) : (
            <ButtonDelete onClick={deleteBanner}>
              <img src={trash} height={30} alt="add" />
              <strong>Apagar Stories</strong>
            </ButtonDelete>
          )}
        </WrapperButton>
      </WrapperText>
    </WrapperStories>
  );
}

export default memo(Banner);
