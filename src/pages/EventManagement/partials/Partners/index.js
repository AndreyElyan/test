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

import { useEvent } from '../../Context';

import SponsorCategory from './SponsorCategory';

import {
  Container,
  NewPartner,
  Content,
  WrapperRegisters,
  WrapperImg,
  LabelWrapper,
  HeaderRow,
  Form,
  TableWrapper,
  WrapperSelect,
  Button,
  WrapperButtonPartner,
} from './styles';

export default function Partners() {
  const [checked, setChecked] = useState(true);
  const [order] = useState(null);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { state, actions } = useEvent();
  const { sponsors } = state;

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
  }, [order, getList]);

  function submitForm(event) {
    if (event) event.preventDefault();
  }
  return (
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
            <Input label="Site" width="420px" />
          </div>

          <div className="inputs">
            <Input label="Link do Vídeo" width="420px" />
            <a href="/events/new/partners">Como adicionar vídeo no YouTube?</a>
          </div>
          <WrapperSelect>
            <Select
              width="288px"
              onChange={() => setChecked(!checked)}
              options={[
                {
                  options: [
                    { value: '4', label: 'Value 041231121' },
                    { value: '5', label: '05' },
                    { value: '6', label: '06' },
                  ],
                },
              ]}
              optionsListHeight="200px"
              iconColor="#fe324b"
            />

            <Checkbox
              name="expositor"
              label="Expositor"
              customStyles={{
                padding: ' 0 40px',
              }}
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </WrapperSelect>
          <WrapperButtonPartner>
            <Button>
              <strong>Salvar Parceiro</strong>
            </Button>
          </WrapperButtonPartner>
        </Content>
      </NewPartner>
      {sponsors.map((sponsor, index) => (
        <SponsorCategory
          key={index}
          addNewSponsor={actions.sponsors.addNewSponsor}
          editSponsor={({ label, value }) =>
            actions.sponsors.editSponsor({ index, label, value })
          }
          sponsor={sponsor}
        />
      ))}
      ), [sponsors, actions.sponsors]
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
    </Container>
  );
}
