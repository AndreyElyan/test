import React from 'react';

import api from '../../../../services/api';

import { useEvent } from '../../Context';

import { Container, FooterStyle, ButtonStyle } from './styles';

const saveTrails = async ({ id, trails }) => {
  for (const trail of trails) {
    if (trail.id) {
      await api.put(`/track?eventId=${id}`, trail);
    } else {
      await api.post(`/track?eventId=${id}`, trail);
    }
  }
};

const saveEvents = async ({ id, title, days, status, trails }) => {
  await api.put(`/event/${id}`, {
    title,
    days: days.map(date => new Date(date).valueOf()),
    status: status.value || status,
  });

  await saveTrails({ id, trails });
};

export default function Footer() {
  const { state } = useEvent();
  const { events } = state;

  const submitForm = async () => {
    await saveEvents(events);
    window.location.reload();
  };

  return (
    <Container>
      <FooterStyle>
        <ButtonStyle to="/">
          <strong>Voltar</strong>
        </ButtonStyle>

        <button type="button" className="save" onClick={submitForm}>
          Salvar Evento
        </button>
      </FooterStyle>
    </Container>
  );
}
