import React, { Component } from 'react';

import Select from '4all-ui/components/Select';

import Input from '../../../../components/Input';
import {
  Table,
  Header as HeaderTable,
  Column,
  Row,
} from '../../../../components/Table';
import Calendar from '../../../../components/Calendar';

import Search from '../../../../components/Icons/Search';
import add from '../../../../assets/button/add.svg';
import CalendarIcon from '../../../../components/Icons/Calendar';

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
  CalendarOverlay,
  WrapperCalendar,
} from './styles';

export default class Programming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenCalendar: false,
    };
  }

  handleOpenCalendar = () => {
    const { isOpenCalendar } = this.state;
    if (!isOpenCalendar) this.setState({ isOpenCalendar: true });
  };

  handleCloseCalendar = event => {
    if (event) event.stopPropagation();
    const { isOpenCalendar } = this.state;
    if (isOpenCalendar) this.setState({ isOpenCalendar: false });
  };

  handleSetDate = dates => {};

  submitForm = event => {
    if (event) event.preventDefault();
  };

  onChangeStatus = value => {};

  render() {
    const { isOpenCalendar } = this.state;

    return (
      <Container>
        <NewProgramming>
          <Header>
            <strong>Nova Programação</strong>
          </Header>

          <WrapperTitle>
            <Input label="Título" width="1066px" />
          </WrapperTitle>

          <WrapperPickers>
            <WrapperCalendar
              isOpenCalendar={isOpenCalendar}
              onClick={this.handleOpenCalendar}
            >
              <CalendarOverlay onClick={this.handleCloseCalendar} />
              <Input
                label="Data"
                icon={<CalendarIcon />}
                width="340px"
                type="text"
              />
              <Calendar setDate={this.handleSetDate} />
            </WrapperCalendar>

            <Input label="Início" className="Start" width="340px" />

            <Input label="Fim" className="End" width="340px" />
          </WrapperPickers>

          <WrapperDescription>
            <Input
              label="Descrição"
              className="Description"
              width="1065PX"
              height="100px"
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
                options={[
                  {
                    label: 'Palestrante',
                    options: [{ value: 'Andrey', label: 'Andrey' }],
                  },
                ]}
                optionsListHeight="100px"
                iconColor="#fe324b"
                width="480px"
                height="45px"
                onChange={this.onChangeStatus}
              />
            </WrapperSelectSpeaker>

            <WrapperSelectMediator>
              <Select
                isMultiple
                options={[
                  {
                    label: 'Mediador',
                    options: [{ value: 'Andrey', label: 'Andrey' }],
                  },
                ]}
                optionsListHeight="100px"
                iconColor="#fe324b"
                width="480px"
                height="45px"
                customValueStyles={{}}
                onChange={this.onChangeStatus}
              />
            </WrapperSelectMediator>
          </WrapperSelect>

          <WrapperLabelSelect>
            <LabelSpeaker>
              <strong>Trilha</strong>
            </LabelSpeaker>

            <LabelMediator>
              <strong>Tipo</strong>
            </LabelMediator>
          </WrapperLabelSelect>

          <WrapperSelect>
            <WrapperSelectSpeaker>
              <Select
                options={[
                  {
                    label: 'Trilha',
                    options: [{ value: 'aeeo', label: 'aeeo' }],
                  },
                ]}
                optionsListHeight="100px"
                iconColor="#fe324b"
                width="340px"
                height="45px"
                onChange={this.onChangeStatus}
              />
            </WrapperSelectSpeaker>

            <WrapperSelectMediator>
              <Select
                isMultiple
                options={[
                  {
                    label: 'Tipo',
                    options: [{ value: 'Tipo', label: 'Tipo' }],
                  },
                ]}
                optionsListHeight="100px"
                iconColor="#fe324b"
                width="340px"
                height="45px"
                customValueStyles={{}}
                onChange={this.onChangeStatus}
              />
            </WrapperSelectMediator>

            <WrapperButton>
              <Button type="button">
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
            <Form onSubmit={this.submitForm}>
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
                  <strong>Título</strong>
                </Column>
                <Column width="45%">
                  <strong>Data e Hora</strong>
                </Column>
                <Column width="35%">
                  <strong>Descrição</strong>
                </Column>
                <Column width="35%">
                  <strong>Palestrante</strong>
                </Column>
                <Column width="35%">
                  <strong>Mediador</strong>
                </Column>
                <Column width="35%">
                  <strong>Trilha</strong>
                </Column>
                <Column width="35%">
                  <strong>Descrição</strong>
                </Column>
              </HeaderTable>
              <div>
                <Row>
                  <Column width="45%">
                    <p>Semana Omnistack</p>
                  </Column>
                  <Column width="45%">
                    <p>10/01/2020</p>
                  </Column>
                  <Column width="35%">
                    <p>Curso</p>
                  </Column>
                  <Column width="35%">
                    <p>Diego Fernandes</p>
                  </Column>
                  <Column width="35%">
                    <p>Diego Fernandes</p>
                  </Column>
                  <Column width="35%">
                    <p>Blues</p>
                  </Column>
                  <Column width="35%">
                    <p>Curso</p>
                  </Column>
                </Row>
              </div>
            </Table>
          </TableWrapper>
        </Registers>
      </Container>
    );
  }
}
