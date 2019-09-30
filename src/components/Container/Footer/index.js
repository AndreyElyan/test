import React from 'react';

import { Container, FooterStyle, ButtonStyle } from './styles';

export default function Footer() {
  return (
    <Container>
      <FooterStyle>
        <ButtonStyle to="/">
          <strong>Voltar</strong>
        </ButtonStyle>

        <button type="button" className="save">
          Salvar Evento
        </button>
      </FooterStyle>
    </Container>
  );
}
