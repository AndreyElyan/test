import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import ProductImage from '4all-ui/components/ProductImage';

import { Container } from './styles';

export default function PickerImage() {
  const { defaultValue, registerField } = useField('avatar');

  const [file] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();
    const filePreview = e.target.files[0];

    data.append('file', filePreview);

    setPreview(URL.createObjectURL(filePreview));
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <ProductImage
          size="150px"
          iconSize="50px"
          fontSize="13px"
          backgroundColor="#f9f9f9"
          image={preview}
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
