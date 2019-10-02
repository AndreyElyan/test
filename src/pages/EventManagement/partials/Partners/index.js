import React, { useState, useEffect } from 'react';
import Select from '4all-ui/components/Select';
import Checkbox from '4all-ui/components/Checkbox';

import api from '../../../../services/api';
import { error } from '../../../../services/notifier';

import Search from '../../../../components/Icons/Search';
import PickerImage from '../../../../components/Picker/Image';
import Input from '../../../../components/Input';
import {
  Table,
  Header as HeaderTable,
  Column,
  Row,
} from '../../../../components/Table';

import add from '../../../../assets/button/add.svg';

import {
  Container,
  NewPartner,
  SponsorClass,
  Content,
  WrapperRegisters,
  WrapperImg,
  LabelWrapper,
  WrapperSponsors,
  HeaderRow,
  Form,
  TableWrapper,
  WrapperSelect,
  WrapperButtonClass,
  Button,
  WrapperButtonPartner,
} from './styles';

export default function Partners() {
  const [order] = useState(null);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    if (loading) return null;

    setLoading(true);

    try {
      const { data } = await api.get(
        `https://abf.homolog.api.somosdx.co/partner?itemsPerPage=100&currentPage=0&eventId=5d5dafda81ca861b5bf038dc`
      );

      setList(data);
    } catch (err) {
      error('Não foi possível recuperar os dados!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, [order]);

  function submitForm(event) {
    if (event) event.preventDefault();
  }
  return (
    <>
      <Container>
        <NewPartner>
          <header>
            <strong>Novo Parceiro</strong>
          </header>
          <Content>
            <WrapperImg>
              <PickerImage name="banner" />
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
            </WrapperImg>

            <WrapperImg>
              <PickerImage name="banner" />
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
            </WrapperImg>
          </Content>

          <Content>
            <div>
              <Input label="Nome do Patrocinador" width="420px" />
            </div>
            <div className="inputs">
              <Input label="Descrição" width="420px" height="120px" />
            </div>
            <div className="inputs">
              <Input label="Link do Vídeo" width="420px" />
              <a href="/events/new/partners">
                Como adicionar vídeo no YouTube?
              </a>
            </div>
            <WrapperSelect>
              <Select
                width="288px"
                onChange={submitForm}
                options={[
                  {
                    options: [
                      { value: '4', label: 'Value 041231121', disabled: true },
                      { value: '5', label: '05' },
                      { value: '6', label: '06' },
                    ],
                  },
                  {
                    label: 'Example',
                    options: [
                      { value: '1', label: 'Value 01' },
                      { value: '2', label: 'Value 02' },
                      { value: '3', label: 'Value 03' },
                    ],
                  },
                ]}
                optionsListHeight="200px"
                iconColor="#fe324b"
              />

              <Checkbox
                onChange={submitForm}
                name="expositor"
                label="Expositor"
                customStyles={{
                  padding: ' 0 40px',
                }}
              />
            </WrapperSelect>
            <WrapperButtonPartner>
              <Button>
                <strong>Salvar Parceiro</strong>
              </Button>
            </WrapperButtonPartner>
          </Content>
        </NewPartner>

        <SponsorClass>
          <header>
            <strong>Classe dos Patrocinadores</strong>
          </header>

          <WrapperSponsors>
            <h1>1º</h1>
            <Input width="335px" />
          </WrapperSponsors>

          <WrapperSponsors>
            <h1>2º</h1>
            <Input width="335px" />
          </WrapperSponsors>

          <WrapperSponsors>
            <h1>3º</h1>
            <Input width="335px" />
          </WrapperSponsors>

          <WrapperButtonClass>
            <Button type="button">
              <img src={add} alt="" />
              <strong>Adicionar Classe</strong>
            </Button>
          </WrapperButtonClass>
        </SponsorClass>
      </Container>
      <WrapperRegisters>
        <header>
          <strong>Classe dos Patrocinadores</strong>
        </header>

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
                <strong>Nome do Parceiro</strong>
              </Column>
              <Column width="50%">
                <strong>Descrição</strong>
              </Column>
              <Column width="35%">
                <strong>Vídeo</strong>
              </Column>
            </HeaderTable>
            {list &&
              list.length > 0 &&
              list.map(element => (
                <div key={element.id}>
                  <Row>
                    <Column width="45%">
                      <p>{element.numberOfPages}</p>
                    </Column>
                    <Column width="50%">
                      <p>Desenvolvedor React</p>
                    </Column>
                    <Column width="35%">
                      <p>linkedin.com/andreyelyan</p>
                    </Column>
                  </Row>
                </div>
              ))}
          </Table>
        </TableWrapper>
      </WrapperRegisters>
    </>
  );
}
