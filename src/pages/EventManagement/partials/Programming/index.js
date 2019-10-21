import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

import Select from '4all-ui/components/Select';

import api from '../../../../services/api';
import { error } from '../../../../services/notifier';

import { useEvent } from '../../Context/index';

import Input from '../../../../components/Input';
import InputDescription from '../../../../components/Input/InputDescription';
import {
  Table,
  Header as HeaderTable,
  Column,
  Row,
} from '../../../../components/Table';

import Search from '../../../../components/Icons/Search';
import add from '../../../../assets/button/add.svg';

import {
  Container,
  NewProgramming,
  Registers,
  Header,
  WrapperTitle,
  WrapperPickers,
  WrapperDescription,
  WrapperButton,
  TableWrapper,
  HeaderRow,
  Form,
  WrapperLabelSelect,
  LabelSpeaker,
  LabelMediator,
  WrapperSelectSpeaker,
  WrapperSelectMediator,
  WrapperSelect,
  Button,
  WrapperCalendar,
  WrapperSelectType,
  LabelType,
} from './styles';

export default function Programming({ match }) {
  const { id } = match.params;

  const [activityActive, setActvityActive] = useState(null);
  const [subTitle, setSubTitle] = useState('');

  const [speakersList, setSpeakersList] = useState([]);
  const [mediatorList, setMediatorList] = useState([]);
  const [trackList, setTrackList] = useState([]);
  const [list, setList] = useState([]);

  const { state, actions } = useEvent();
  const { programming } = state;
  const { programming: programmingsActions, setContext } = actions;

  const submitForm = event => {
    if (event) event.preventDefault();
  };

  const getActivity = async () => {
    const { data } = await api.get(`/activity/${activityActive}?eventId=${id}`);

    setContext({ tab: 'programming', value: data });
    setSubTitle(data.subtitle);
  };

  useEffect(() => {
    getActivity();
  }, [activityActive]);

  const getSpeaker = async () => {
    const { data } = await api.get(`/person?eventId=${id}`);
    setSpeakersList(data);
  };

  useEffect(() => {
    getSpeaker();
  }, []);

  const getMediator = async () => {
    const { data } = await api.get(`/activity-category?eventId=${id}`);
    setMediatorList(data);
  };

  useEffect(() => {
    getMediator();
  }, []);

  const geTracks = async () => {
    const { data } = await api.get(`/track?eventId=${id}`);
    setTrackList(data);
  };

  useEffect(() => {
    geTracks();
  }, []);

  const getProgramation = async () => {
    const { data } = await api.get(`/activity?eventId=${id}`);
    setList(data);
  };

  useEffect(() => {
    getProgramation();
  }, []);

  const formatDate = (timestampComplete, hourWithMinutes) => {
    const date = new Date(timestampComplete);
    const [hour, minute] = hourWithMinutes.split(':');

    date.setHours(hour);
    date.setMinutes(minute);

    return date.valueOf();
  };

  const submitAddProgramming = async () => {
    try {
      await api.post(`/activity?eventId=${id}`, {
        categoryId: programming.categoryId, // '5da5ffc7ac546f000189a2a3'
        title: programming.title,
        image: '',
        personCategories: [
          {
            personIds: [programming.speakerCategoryId.value],
            title: 'Palestrantes',
          },
          {
            personIds: [programming.mediatorCategoryId.value],
            title: 'Mediadores',
          },
        ],
        startTime: formatDate(programming.date, programming.startTime),
        endTime: formatDate(programming.date, programming.endTime),
        subtitle: programming.subTitle,
        description: programming.description,
        trackId: programming.trackId.value,
      });

      window.location.reload();
    } catch (err) {
      error('Erro ao guardar os dados');
    }
  };

  const transformDate = date => {
    return format(date, 'dd/MM/yyyy');
  };

  return (
    <Container>
      <NewProgramming>
        <Header>
          <strong>Nova Programação</strong>
        </Header>

        <WrapperTitle>
          <Input
            label="Título"
            width="1066px"
            value={programming.title}
            onChange={programmingsActions.setTitle}
          />
        </WrapperTitle>

        <WrapperTitle>
          <Input
            label="Sub Título"
            width="1066px"
            value={programming.subTitle || subTitle}
            onChange={programmingsActions.setSubTitle}
          />
        </WrapperTitle>

        <WrapperPickers>
          <WrapperCalendar>
            <Input
              type="date"
              label="Data"
              width="340px"
              value={programming.date}
              onChange={programmingsActions.setDate}
            />
          </WrapperCalendar>

          <Input
            label="Início"
            className="Start"
            width="340px"
            value={programming.startTime}
            onChange={programmingsActions.setStartTime}
            type="time"
          />

          <Input
            label="Fim"
            className="End"
            width="340px"
            value={programming.endTime}
            onChange={programmingsActions.setEndTime}
            type="time"
          />
        </WrapperPickers>

        <WrapperDescription>
          <InputDescription
            label="Descrição"
            className="Description"
            width="1065PX"
            height="100px"
            value={programming.description}
            onChange={programmingsActions.setDescription}
          />
        </WrapperDescription>

        <WrapperLabelSelect>
          <LabelSpeaker>
            <strong>Palestrante</strong>
          </LabelSpeaker>

          <LabelMediator>
            <strong>Mediador</strong>
          </LabelMediator>
        </WrapperLabelSelect>

        <WrapperSelect>
          <WrapperSelectSpeaker>
            <Select
              isMultiple
              className="speakers"
              placeholder="Selecione os Palestrantes"
              width="288px"
              options={[
                {
                  options:
                    speakersList.people &&
                    speakersList.people.length > 0 &&
                    speakersList.people.map(element => ({
                      value: element.id,
                      label: element.name,
                    })),
                },
              ]}
              optionsListHeight="200px"
              iconColor="#fe324b"
              onChange={programmingsActions.setSpeakerCategoryId}
              value={programming.speakerCategoryId}
            />
          </WrapperSelectSpeaker>

          <WrapperSelectMediator>
            <Select
              isMultiple
              className="mediators"
              placeholder="Selecione os Mediadores"
              width="288px"
              options={[
                {
                  options:
                    speakersList.people &&
                    speakersList.people.length > 0 &&
                    speakersList.people.map(element => ({
                      value: element.id,
                      label: element.name,
                    })),
                },
              ]}
              optionsListHeight="200px"
              iconColor="#fe324b"
              onChange={programmingsActions.setMediatorCategoryId}
              value={programming.mediatorCategoryId}
            />
          </WrapperSelectMediator>
        </WrapperSelect>

        <WrapperLabelSelect>
          <LabelSpeaker>
            <strong>Trilha</strong>
          </LabelSpeaker>

          <LabelType>
            <strong>Tipo</strong>
          </LabelType>
        </WrapperLabelSelect>

        <WrapperSelect>
          <WrapperSelectSpeaker>
            <Select
              width="288px"
              placeholder="Selecione a Trilha"
              className="tracks"
              options={[
                {
                  options:
                    trackList &&
                    trackList.length > 0 &&
                    trackList.map(element => ({
                      value: element.id,
                      label: element.title,
                    })),
                },
              ]}
              optionsListHeight="200px"
              iconColor="#fe324b"
              onChange={programmingsActions.setTrackId}
              value={programming.trackId}
            />
          </WrapperSelectSpeaker>

          <WrapperSelectType>
            <Select
              width="288px"
              className="categories"
              placeholder="Selecione o Tipo de Categoria"
              options={[
                {
                  options: mediatorList.map(sponsor => ({
                    value: sponsor.id,
                    label: sponsor.title,
                  })),
                },
              ]}
              optionsListHeight="200px"
              iconColor="#fe324b"
              onChange={programmingsActions.setCategoryId}
              value={programming.categoryId}
            />
          </WrapperSelectType>

          <WrapperButton>
            <Button type="button" onClick={submitAddProgramming}>
              <img src={add} alt="add" />
              <strong>Salvar Evento</strong>
            </Button>
          </WrapperButton>
        </WrapperSelect>
      </NewProgramming>

      <Registers>
        <Header>
          <strong>Programação Cadastrada</strong>
        </Header>

        <HeaderRow>
          <Form onSubmit={submitForm}>
            <Input
              name="text"
              placeholder="Nome, tipo, data, local, último status..."
              icon={<Search />}
            />
          </Form>
        </HeaderRow>

        <TableWrapper>
          <Table>
            <HeaderTable>
              <Column width="30%">
                <strong>Título</strong>
              </Column>

              <Column width="40%">
                <strong>Descrição</strong>
              </Column>

              <Column width="10%">
                <strong>Data e Hora</strong>
              </Column>
            </HeaderTable>

            {list.activities &&
              list.activities.length > 0 &&
              list.activities.map(element => (
                <div
                  key={element.id}
                  onClick={() => {
                    setActvityActive(element.id);
                  }}
                >
                  <Row>
                    <Column width="30%">
                      <p>{element.title}</p>
                    </Column>

                    <Column width="40%">
                      <p>{element.description}</p>
                    </Column>

                    <Column width="10%">
                      <p>{transformDate(element.startTime)}</p>
                    </Column>
                  </Row>
                </div>
              ))}
          </Table>
        </TableWrapper>
      </Registers>
    </Container>
  );
}
