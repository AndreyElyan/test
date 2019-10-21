import React from 'react';

import { Container, WrapperImg } from './styles';

import tutorial from '../../assets/tutorial.png';

export default function Tutorial() {
  return (
    <Container>
      <WrapperImg>
        <img src={tutorial} alt="tutorialYoutube" />
      </WrapperImg>
    </Container>
  );
}
