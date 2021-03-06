import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import Tag from '4all-ui/components/Tag';

import api from '../../services/api';
import { error } from '../../services/notifier';

import add from '../../assets/button/add.svg';
import sortdown from '../../assets/button/sort-down.svg';

import Input from '../../components/Input';
import Loader from '../../components/Loader';
import Search from '../../components/Icons/Search';
import {
  Table,
  Header as HeaderTable,
  Column,
  Row,
} from '../../components/Table';

import {
  ContainerWrapper,
  Content,
  Header,
  Form,
  ButtonStyle,
  HeaderRow,
  TableWrapper,
} from './styles';

const MAP_ORDERS = {
  type_desc: '-type',
  type_asc: 'type',

  date_desc: '-date',
  date_asc: 'date',

  state_desc: '-state',
  state_asc: 'state',
};

export default function Dashboard({ history }) {
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const active = '#418b37';
  const inactive = '#d34848';
  const beta = '#333333';

  const redirectToEvent = idEvent => {
    history.push(`/events/${idEvent}`);
  };

  const createEvent = async () => {
    try {
      const { data } = await api.post('/event', {
        title: '',
        status: 'INACTIVE',
      });

      redirectToEvent(data.id);
    } catch (err) {
      error('Não foi possível recuperar os dados!');
    }
  };

  const getList = async () => {
    if (loading) return null;

    setLoading(true);

    try {
      const { data } = await api.get(`/event?beta=true`);
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

  const submitForm = event => {
    if (event) event.preventDefault();

    if (search.trim() !== '') {
      getList();
    }
  };

  const transformDate = date => {
    return format(date, 'dd/MM/yyyy');
  };

  const makeOrder = newOrder => {
    setOrder(newOrder);
  };

  return (
    <ContainerWrapper>
      <Content>
        <Header>
          <strong>Eventos criados</strong>
        </Header>

        <HeaderRow>
          <Form onSubmit={submitForm}>
            <Input
              name="text"
              placeholder="Nome, tipo, data, local, último status..."
              icon={<Search onClick={submitForm} />}
              value={search}
              onChange={setSearch}
            />
          </Form>

          <ButtonStyle onClick={createEvent}>
            <img src={add} alt="Criar Evento" />

            <strong>Criar Evento</strong>
          </ButtonStyle>
        </HeaderRow>

        <TableWrapper>
          {loading ? (
            <Loader />
          ) : (
            <Table>
              <HeaderTable>
                <Column width="45%">
                  <strong>Nome</strong>
                </Column>

                <Column width="45%">
                  <strong>Data</strong>
                  <button
                    type="button"
                    onClick={() =>
                      makeOrder(
                        order === MAP_ORDERS.date_desc
                          ? MAP_ORDERS.date_asc
                          : MAP_ORDERS.date_desc
                      )
                    }
                  >
                    <img src={sortdown} alt="" />
                  </button>
                </Column>
                <Column width="10%">
                  <strong>Último status</strong>
                  <button
                    type="button"
                    onClick={() =>
                      makeOrder(
                        order === MAP_ORDERS.state_desc
                          ? MAP_ORDERS.state_asc
                          : MAP_ORDERS.state_desc
                      )
                    }
                  >
                    <img src={sortdown} alt="" />
                  </button>
                </Column>
              </HeaderTable>
              {list &&
                list.length > 0 &&
                list.map(element => {
                  const date = element.days[0]
                    ? transformDate(element.days[0])
                    : null;

                  const status = () => {
                    if (element.status === 'ACTIVE') {
                      return active;
                    }
                    if (element.status === 'INACTIVE') {
                      return inactive;
                    }
                    if (element.status === 'BETA') {
                      return beta;
                    }
                  };

                  const titleStatus = pStatus => {
                    if (pStatus === 'ACTIVE') {
                      return 'Ativo';
                    }
                    if (pStatus === 'INACTIVE') {
                      return 'Inativo';
                    }
                    if (pStatus === 'BETA') {
                      return 'Beta';
                    }
                  };

                  return (
                    <div
                      key={element.id}
                      onClick={() => redirectToEvent(element.id)}
                    >
                      <Row>
                        <Column width="45%">
                          <p>{element.title}</p>
                        </Column>
                        <Column width="45%">
                          <Link to="/events/edit" />
                          {date && <p>{date}</p>}
                        </Column>
                        <Column width="10%">
                          <Tag
                            bgColor="#FFFFFF"
                            color={status}
                            border="1px solid #E4E4E4"
                          >
                            {titleStatus(element.status)}
                          </Tag>
                        </Column>
                      </Row>
                    </div>
                  );
                })}
            </Table>
          )}
        </TableWrapper>
      </Content>
    </ContainerWrapper>
  );
}
