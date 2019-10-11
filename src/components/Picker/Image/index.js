import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import ProductImage from '4all-ui/components/ProductImage';

import { Container } from './styles';

export default function PickerImage({ handleChange, preview }) {
  return (
    <Container>
      <label htmlFor="avatar">
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
          id="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
