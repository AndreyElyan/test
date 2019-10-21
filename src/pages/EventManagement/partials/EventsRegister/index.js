/* eslint-disable react/destructuring-assignment */
import React, { useState, useCallback, useEffect, memo } from 'react';
import Select from '4all-ui/components/Select';

import api from '../../../../services/api';

import add from '../../../../assets/button/add.svg';
import CalendarIcon from '../../../../components/Icons/Calendar';

import InputStyles from '../../../../components/Input';
import Calendar from '../../../../components/Calendar';

import SectionTags from './partials/SectionTags';

import { useEvent } from '../../Context/index';
import { DEFAULTS_TRAILS } from '../../Context/actions';

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

const options = [
  { value: 'BETA', label: 'Beta' },
  { value: 'ACTIVE', label: 'Ativo' },
  { value: 'INACTIVE', label: 'Inativo' },
];

function EventsRegister({ match }) {
  const { id } = match.params;
  const [isOpenCalendar, setOpenCalendar] = useState(false);

  const { state, actions } = useEvent();
  const { events } = state;

  const { events: eventsActions, setContext } = actions;

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

  const handleChangeDates = useCallback(
    dates => {
      const ordersDates = dates.sort((a, b) => {
        return new Date(a).valueOf() - new Date(b).valueOf();
      });

      eventsActions.setDays(ordersDates);
    },
    [eventsActions]
  );

  const dates = events.days
    ? events.days
        .map(date => {
          const dateObject = new Date(date);
          return `${dateObject.getDate()}/${dateObject.getMonth() + 1}`;
        })
        .join(', ')
    : null;

  const getEvent = async () => {
    const { data: dataEvent } = await api.get(`/event/${id}`);
    const { data: dataTrails } = await api.get(`/track/?eventId=${id}`);

    if (dataTrails)
      dataEvent.trails = !dataTrails.length ? DEFAULTS_TRAILS : dataTrails;

    setContext({
      tab: 'events',
      value: {
        ...events,
        ...dataEvent,
      },
    });
  };

  useEffect(() => {
    getEvent();
  }, []);

  const statusSelected = events.status.value
    ? events.status
    : options.find(status => status.value === events.status);

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
                  options,
                },
              ]}
              optionsListHeight="100px"
              iconColor="#fe324b"
              width="340px"
              height="45px"
              onChange={eventsActions.setStatus}
              value={statusSelected}
            />
          </WrapperAbove>

          <LabelTrail>
            <strong>Trilhas</strong>
          </LabelTrail>

          {events.trails.map((trail, index) => (
            <WrapperTrails key={`${index}-${trail.id}`}>
              <InputStyles
                width="340px"
                type="text"
                description="Adicione uma trilha e escolha a cor de identificação"
                background={trail.color}
                onChange={value =>
                  eventsActions.setTitleTrails({ value, index })
                }
                value={trail.title}
              />

              <ButtonStyle
                type="button"
                onClick={() => {
                  if (!trail.isOpenColors) {
                    eventsActions.toggleIsOpenColors({
                      value: true,
                      index,
                    });
                  }
                }}
              >
                <img src={add} alt="Trails" />
                <strong>Adicionar Trilha</strong>
                <Overlay
                  onClick={event => {
                    if (event) event.stopPropagation();

                    eventsActions.toggleIsOpenColors({
                      value: false,
                      index,
                    });
                  }}
                  isOpen={trail.isOpenColors}
                />
                <WrapperColors isOpen={trail.isOpenColors}>
                  {COLORS.map((colorObject, i) => (
                    <LabelColor
                      key={`${i}-${colorObject.value}`}
                      color={colorObject.value}
                      border={colorObject.border}
                      onClick={() => {
                        eventsActions.setColor({
                          value: colorObject.value,
                          index,
                        });
                      }}
                    />
                  ))}
                </WrapperColors>
              </ButtonStyle>
            </WrapperTrails>
          ))}
        </Content>
      </WrapperEvents>
      <SectionTags eventId={id} />
    </Container>
  );
}

export default memo(EventsRegister);
