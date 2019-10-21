import React, { memo, useState } from 'react';
import image2base64 from 'image-to-base64';

import api from '../../../../../services/api';
import { error } from '../../../../../services/notifier';

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

function Banner({
  eventId,
  isLast,
  banner,
  addNewBanner,
  deleteBanner,
  editBanner,
}) {
  const [preview, setPreview] = useState('');

  async function handleChangeImage(e) {
    const file = e.target.files[0];

    if (file) {
      const imagePreview = URL.createObjectURL(file);
      setPreview(imagePreview);

      const image = await image2base64(imagePreview);
      editBanner({ label: 'image', value: image });
    }
  }

  const submitAddBanner = async () => {
    const { data } = await api.get(`/banner?eventId=${eventId}`);

    if (data.length < 3) {
      await api.post(`/banner?eventId=${eventId}`, {
        image: `data:image/png;base64,${banner.image}`,

        title: banner.title,
        subtitle: banner.subtitle,
        actionType: 'SPONSORS',
      });
    } else {
      error('Limite de três banners por evento.');
    }
  };

  const addBanners = () => {
    if (!banner.id) submitAddBanner();
    addNewBanner();
  };

  const submitDeleteBanner = async () => {
    await api.delete(`/banner/${banner.id}/?eventId=${eventId}`);
  };

  const handleDeleteBanner = () => {
    submitDeleteBanner();
    deleteBanner();
  };

  return (
    <WrapperStories>
      <header>
        <strong>Banners</strong>
      </header>
      <WrapperImage>
        <PickerImage
          handleChange={handleChangeImage}
          preview={preview || banner.image}
          id={banner.id}
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
          className="title"
          height="45px"
          width="850px"
          label="Título"
          value={banner.title}
          onChange={value => editBanner({ label: 'title', value })}
        />

        <Input
          className="pinkColorAdd"
          height="45px"
          width="850px"
          label="Cor Rosa"
          value={banner.subtitle}
          onChange={value => editBanner({ label: 'subtitle', value })}
        />

        <WrapperButton>
          {isLast ? (
            <ButtonAdd onClick={addBanners}>
              <img src={Add} height={30} alt="add" />
              <strong>Mais stories</strong>
            </ButtonAdd>
          ) : (
            <ButtonDelete onClick={handleDeleteBanner}>
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
