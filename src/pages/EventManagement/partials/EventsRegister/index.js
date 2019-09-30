/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Select from '4all-ui/components/Select';

import api from '../../../../services/api';

import add from '../../../../assets/button/add.svg';
import CalendarIcon from '../../../../components/Icons/Calendar';

import InputStyles from '../../../../components/Input';
import Calendar from '../../../../components/Calendar';

import SectionTags from './SectionTags';

import {
  Container,
  WrapperEvents,
  Content,
  WrapperAbove,
  WrapperTrails,
  ButtonStyle,
  WrapperInput,
  CalendarOverlay,
  WrapperLabel,
  LabelDate,
  LabelStatus,
  LabelTrail,
} from './styles';

export default class EventsRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenCalendar: false,
      tags: [],
      inputTags: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id !== 'new') {
      this.getEventDetail(id);
    }
  }

  getEventDetail = async id => {
    try {
      const responseEventDetail = await api.get(`/events/${id}`);
    } catch (err) {}
  };

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

  onChangeStatus = value => {
    const status = value;
  };

  render() {
    const { isOpenCalendar } = this.state;

    return (
      <Container>
        <WrapperEvents>
          <header>
            <strong>Cadastro de Eventos</strong>
          </header>
          <Content>
            <InputStyles width="690px" type="text" label="Nome do Evento" />

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
                onClick={this.handleOpenCalendar}
              >
                <CalendarOverlay onClick={this.handleCloseCalendar} />
                <InputStyles
                  className="calendar"
                  icon={<CalendarIcon />}
                  width="340px"
                  type="text"
                  disabled
                />
                <Calendar setDate={this.handleSetDate} />
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
                onChange={this.onChangeStatus}
              />
            </WrapperAbove>

            <LabelTrail>
              <strong>Trilhas</strong>
            </LabelTrail>
            <WrapperTrails>
              <InputStyles width="340px" type="text" disabled />

              <ButtonStyle type="button">
                <img src={add} alt="Trails" />
                <strong>Adicionar Trilha</strong>
              </ButtonStyle>
            </WrapperTrails>
          </Content>
        </WrapperEvents>
        <SectionTags />
      </Container>
    );
  }
}
