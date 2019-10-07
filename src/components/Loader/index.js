import React from 'react';
import Loader4all from '4all-ui/components/Loader';

import { LoaderStyles } from './styles';

export default function Loader() {
  return (
    <LoaderStyles>
      <Loader4all color="#fe324b" size="60px" width="10px" />
    </LoaderStyles>
  );
}
