import React from 'react';
import { useField } from '@rocketseat/unform';
import ProductImage from '4all-ui/components/ProductImage';

import { Container } from './styles';

export default function PickerImage({
  handleChange,
  preview,
  id = new Date().valueOf(),
}) {
  const forInput = `avatar-${id}`;

  return (
    <Container>
      <label htmlFor={forInput}>
        <ProductImage
          size="150px"
          iconSize="50px"
          fontSize="13px"
          backgroundColor="#f9f9f9"
          image={preview}
          emptyText="Sem Foto"
        />

        <input
          type="file"
          id={forInput}
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
