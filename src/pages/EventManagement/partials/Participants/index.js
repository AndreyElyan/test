import React, { useCallback } from 'react';

import Search from '../../../../components/Icons/Search';

import {
  Table,
  Header as HeaderTable,
  Column,
  Row,
} from '../../../../components/Table';

import Input from '../../../../components/Input';

import {
  Container,
  ParticipantsRegistered,
  Header,
  HeaderRow,
  Form,
  TableWrapper,
} from './styles';

export default function Participants() {
  const submitForm = useCallback(event => {
    if (event) event.preventDefault();
  }, []);
  return (
    <Container>
      <ParticipantsRegistered>
        <Header>
          <strong>Eventos criados</strong>
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
                <strong>Nome completo</strong>
              </Column>
              <Column width="45%">
                <strong>Data de nascimento</strong>
              </Column>
              <Column width="35%">
                <strong>Telefone</strong>
              </Column>
              <Column width="35%">
                <strong>Empresa</strong>
              </Column>
              <Column width="35%">
                <strong>Cargo</strong>
              </Column>
            </HeaderTable>
            <div>
              <Row>
                <Column width="45%">
                  <p>Andrey Elyan</p>
                </Column>
                <Column width="45%">
                  <p>19/07/1998</p>
                </Column>
                <Column width="35%">
                  <p>(51) 98580-9513</p>
                </Column>
                <Column width="35%">
                  <p>4all</p>
                </Column>
                <Column width="35%">
                  <p>Dev</p>
                </Column>
              </Row>
            </div>
          </Table>
        </TableWrapper>
      </ParticipantsRegistered>
    </Container>
  );
}
