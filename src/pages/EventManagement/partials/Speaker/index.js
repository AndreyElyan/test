/* eslint-disable no-restricted-globals */
import React, { useCallback, useEffect, useState } from 'react';
import image2base64 from 'image-to-base64';

import api from '../../../../services/api';
import { error } from '../../../../services/notifier';

import { useEvent } from '../../Context/index';

import Search from '../../../../components/Icons/Search';
import Input from '../../../../components/Input';
import InputDescription from '../../../../components/Input/InputDescription';
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
  const [preview, setPreview] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const { id } = match.params;

  const { state, actions } = useEvent();
  const { speakers } = state;
  const { speakers: speakersActions } = actions;

  const submitForm = useCallback(event => {
    if (event) event.preventDefault();
  }, []);

  async function handleChangeImage(e) {
    const file = e.target.files[0];

    if (file) {
      const imagePreview = URL.createObjectURL(file);
      setPreview(imagePreview);

      const image = await image2base64(imagePreview);
      setProfileImage(image);
    }
  }

  const newSpeaker = async () => {
    try {
      const { data } = await api.post(`/person?eventId=${id}`, {
        name: speakers.name,
        description: speakers.description,
        profileImage: `data:image/png;base64,${profileImage}`,
        linkedin: speakers.linkedin,
      });

      window.location.reload();
      return data;
    } catch (err) {
      error('Não foi possível guardar os dados');
    }
  };

  const getList = async () => {
    if (loading) return null;

    setLoading(true);

    try {
      const { data } = await api.get(`/person?eventId=${id}`);
      setList(data);
    } catch (err) {
      error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      <NewSpeaker>
        <WrapperSpeaker>
          <div className="image">
            <PickerImage
              handleChange={handleChangeImage}
              preview={preview || speakers.image}
            />
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
            <InputDescription
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
              <Column width="35%">
                <strong>Nome do Palestrante</strong>
              </Column>
              <Column width="35%">
                <strong>Descrição</strong>
                <button type="button">
                  <img src={sortdown} alt="" />
                </button>
              </Column>
              <Column width="30%">
                <strong>Link</strong>
                <button type="button">
                  <img src={sortdown} alt="" />
                </button>
              </Column>
            </HeaderTable>

            {list.people &&
              list.people.length > 0 &&
              list.people.map(element => (
                <div key={element.id}>
                  <Row>
                    <Column width="35%">
                      <p>{element.name}</p>
                    </Column>
                    <Column width="35%">
                      <p>{element.description}</p>
                    </Column>
                    <Column width="30%">
                      <p>{element.linkedin}</p>
                    </Column>
                  </Row>
                </div>
              ))}
          </Table>
        </TableWrapper>
      </ListSpeakers>
    </Container>
  );
}
