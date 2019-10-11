import React, { useCallback, useState, useEffect } from 'react';

import api from '../../../../services/api';
import { error } from '../../../../services/notifier';

import { useEvent } from '../../Context/index';

import Search from '../../../../components/Icons/Search';
import Input from '../../../../components/Input';
import {
  Table,
  Header as HeaderTable,
  Column,
  Row,
} from '../../../../components/Table';
import PickerImage from '../../../../components/Picker/Image';

import add from '../../../../assets/button/add.svg';
import sortdown from '../../../../assets/button/sort-down.svg';

import {
  Container,
  NewSpeaker,
  ListSpeakers,
  WrapperSpeaker,
  WrapperInputs,
  TableWrapper,
  Header,
  HeaderRow,
  Form,
  LabelWrapper,
  WrapperDescription,
  WrapperButton,
  Button,
} from './styles';

export default function Speaker({ match }) {
  const { id } = match.params;
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [order] = useState(null);

  const { state, actions } = useEvent();
  const { speakers } = state;
  const { speakers: speakersActions, setContext } = actions;

  const submitForm = useCallback(event => {
    if (event) event.preventDefault();
  }, []);

  const getList = async () => {
    if (loading) return null;

    setLoading(true);

    try {
      const { data } = await api.get(`/person?eventId=${id}`);

      setList(data);
    } catch (err) {
      error('Não foi encontrado');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, [order]);

  const newSpeaker = async () => {
    try {
      const { data } = api.post(`/person?eventId=${id}`, {
        name: speakers.name,
        description: speakers.description,
        profileImage: '',
        linkedin: speakers.linkedin,
      });

      return data;
    } catch (err) {
      error('Não foi possível guardar os dados');
    }
  };

  const getSpeaker = async () => {
    const { data: dataSpeaker } = await api.get(`/person?eventId=${id}`);

    setContext({
      tab: 'events',
      value: {
        ...speakers,
        ...dataSpeaker,
      },
    });
  };

  useEffect(() => {
    getSpeaker();
  }, []);

  return (
    <Container>
      <NewSpeaker>
        <WrapperSpeaker>
          <div className="image">
            <PickerImage name="avatar_id" />
            <LabelWrapper>
              <div>
                <strong>JPEG,JPG</strong>
                <strong>ou PNG</strong>
              </div>
              <span>
                <strong>Máximo</strong>
                <strong>de 2Mb</strong>
              </span>
            </LabelWrapper>
          </div>

          <WrapperInputs>
            <Input
              label="Nome do Palestrante"
              className="name"
              width="480px"
              height="45px"
              type="text"
              onChange={speakersActions.setName}
              value={speakers.name}
            />

            <Input
              label="Linkedin"
              className="link"
              width="480px"
              height="45px"
              type="text"
              onChange={speakersActions.setLinkedin}
              value={speakers.linkedin}
            />
          </WrapperInputs>

          <WrapperDescription>
            <Input
              className="description"
              width="325px"
              height="135px"
              type="text"
              label="Descrição"
              onChange={speakersActions.setDescription}
              value={speakers.description}
            />
          </WrapperDescription>

          <WrapperButton>
            <Button onClick={newSpeaker} type="button">
              <img src={add} alt="add" />
              <strong>Salvar Palestrante</strong>
            </Button>
          </WrapperButton>
        </WrapperSpeaker>
      </NewSpeaker>

      <ListSpeakers>
        <Header>
          <strong>Palestrantes Cadastrados</strong>
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
              <Column width="45%">
                <strong>Nome do Palestrante</strong>
              </Column>
              <Column width="50%">
                <strong>Descrição</strong>
                <button type="button">
                  <img src={sortdown} alt="" />
                </button>
              </Column>
              <Column width="35%">
                <strong>Link</strong>
                <button type="button">
                  <img src={sortdown} alt="" />
                </button>
              </Column>
            </HeaderTable>

            <Row>
              <Column width="45%">
                <p>{speakers.name}</p>
              </Column>
              <Column width="50%">
                <p>{speakers.description}</p>
              </Column>
              <Column width="35%">
                <p>{speakers.linkedin}</p>
              </Column>
            </Row>
          </Table>
        </TableWrapper>
      </ListSpeakers>
    </Container>
  );
}
