import React from 'react';

import api from '../../../../services/api';

import { useEvent } from '../../Context';

import { Container, FooterStyle, ButtonStyle } from './styles';

const saveTrails = async ({ id, trails }) => {
  if (trails.id) {
    await api.put(`/track?eventId=${id}`, trails);
  } else {
    await api.post(`/track?eventId=${id}`, trails);
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
  const {
    banners,
    events,
    partners,
    programming,
    speakers,
    sponsorCategory,
    stories,
  } = state;

  const submitForm = async () => {
    await saveEvents(events);
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
