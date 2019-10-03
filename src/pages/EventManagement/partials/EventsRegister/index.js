/* eslint-disable react/destructuring-assignment */
import React, { useState, useCallback } from 'react';
import Select from '4all-ui/components/Select';

import api from '../../../../services/api';

import add from '../../../../assets/button/add.svg';
import CalendarIcon from '../../../../components/Icons/Calendar';

import InputStyles from '../../../../components/Input';
import Calendar from '../../../../components/Calendar';

import SectionTags from './partials/SectionTags';

import { useEvent } from '../../Context/index';

import {
  Container,
  WrapperEvents,
  Content,
  WrapperAbove,
  WrapperTrails,
  ButtonStyle,
  WrapperInput,
  Overlay,
  WrapperLabel,
  LabelDate,
  LabelStatus,
  LabelTrail,
  WrapperColors,
  LabelColor,
} from './styles';

const COLORS = [
  { value: '#fff', border: true },
  { value: '#f18b82', border: false },
  { value: '#f7bc45', border: false },
  { value: '#fff475', border: false },
  { value: '#caf88f', border: false },
  { value: '#a5fbeb', border: false },
  { value: '#cbf0f8', border: false },
  { value: '#aecbfa', border: false },
  { value: '#d7aefa', border: false },
  { value: '#f7cee7', border: false },
  { value: '#e6c9a8', border: false },
  { value: '#e8eaed', border: false },
];

function EventsRegister() {
  const [isOpenCalendar, setOpenCalendar] = useState(false);
  const [isOpenColors, setOpenColor] = useState(false);

  const { state, actions } = useEvent();
  const { events } = state;
  const { events: eventsActions } = actions;

  const handleOpenCalendar = useCallback(() => {
    if (!isOpenCalendar) setOpenCalendar(true);
  }, [isOpenCalendar]);

  const handleCloseCalendar = useCallback(
    event => {
      if (event) event.stopPropagation();
      if (isOpenCalendar) setOpenCalendar(false);
    },
    [isOpenCalendar]
  );

  const handleOpenColors = useCallback(() => {
    if (!isOpenColors) setOpenColor(true);
  }, [isOpenColors]);

  const handleCloseColors = useCallback(
    event => {
      if (event) event.stopPropagation();
      if (isOpenColors) setOpenColor(false);
    },
    [isOpenColors]
  );

  const handleChangeDates = useCallback(dates => {
    const ordersDates = dates.sort((a, b) => {
      return new Date(a).valueOf() - new Date(b).valueOf();
    });

    eventsActions.setDays(ordersDates);
  }, []);

  const dates = events.days
    .map(date => {
      const dateObject = new Date(date);
      return `${dateObject.getDate()}/${dateObject.getMonth() + 1}`;
    })
    .join(', ');

  return (
    <Container>
      <WrapperEvents>
        <header>
          <strong>Cadastro de Eventos</strong>
        </header>
        <Content>
          <InputStyles
            width="690px"
            type="text"
            label="Nome do Evento"
            onChange={eventsActions.setTitle}
            value={events.title}
          />

          <WrapperLabel>
            <LabelDate>
              <strong>Vigência</strong>
            </LabelDate>

            <LabelStatus>
              <strong>Status</strong>
            </LabelStatus>
          </WrapperLabel>
          <WrapperAbove>
            <WrapperInput
              isOpenCalendar={isOpenCalendar}
              onClick={handleOpenCalendar}
            >
              <Overlay onClick={handleCloseCalendar} isOpen={isOpenCalendar} />
              <InputStyles
                className="calendar"
                icon={<CalendarIcon />}
                width="340px"
                type="text"
                disabled
                value={dates}
              />
              <Calendar setDate={handleChangeDates} />
            </WrapperInput>

            <Select
              options={[
                {
                  label: 'Status',
                  options: [
                    { value: 'BETA', label: 'Beta' },
                    { value: 'ACTIVE', label: 'Ativo' },
                    { value: 'INACTIVE', label: 'Inativo' },
                  ],
                },
              ]}
              optionsListHeight="100px"
              iconColor="#fe324b"
              width="340px"
              height="45px"
              onChange={eventsActions.setStatus}
              value={events.status}
            />
          </WrapperAbove>

          <LabelTrail>
            <strong>Trilhas</strong>
          </LabelTrail>
          <WrapperTrails>
            <InputStyles
              width="340px"
              type="text"
              description="Adicione uma trilha e escolha a cor de identificação"
              background={events.trails}
              onChange={eventsActions.setTitleColor}
              value={events.titleColor}
            />

            <ButtonStyle type="button" onClick={handleOpenColors}>
              <img src={add} alt="Trails" />
              <strong>Adicionar Trilha</strong>
              <Overlay onClick={handleCloseColors} isOpen={isOpenColors} />
              <WrapperColors onClick={handleCloseColors} isOpen={isOpenColors}>
                {COLORS.map((color, index) => (
                  <LabelColor
                    key={`${index}-${color.value}`}
                    color={color.value}
                    border={color.border}
                    onClick={() => eventsActions.setColor(color.value)}
                  />
                ))}
              </WrapperColors>
            </ButtonStyle>
          </WrapperTrails>
        </Content>
      </WrapperEvents>
      <SectionTags />
    </Container>
  );
}

export default EventsRegister;
