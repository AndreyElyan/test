import React from 'react';

import withEvent from '../../containers/Event';

import TabPanel from '../../components/TabPanel';
import Footer from './partials/Footer';

import EventProvider from './Context';

import Tabs from './partials/Tabs';

import { Container, WrapperBox, WrapperFooter } from './styles';

const routePath = '/events';

function EventManagement(props) {
  const { id } = props.match.params;

  const links = [
    {
      url: `${routePath}/${id}`,
      label: 'Eventos',
    },
    {
      url: `${routePath}/${id}/stories`,
      label: 'Stories',
    },
    {
      url: `${routePath}/${id}/speakers`,
      label: 'Palestrante',
    },
    {
      url: `${routePath}/${id}/programation`,
      label: 'Programação',
    },
    {
      url: `${routePath}/${id}/partners`,
      label: 'Parceiros',
    },
    {
      url: `${routePath}/${id}/banner-actions`,
      label: 'Banner Actions',
    },
    {
      url: `${routePath}/${id}/participants`,
      label: 'Participantes',
    },
  ];

  return (
    <EventProvider>
      <Container>
        <TabPanel links={links} />
        <WrapperBox>
          <Tabs />
        </WrapperBox>
        <WrapperFooter>
          <Footer />
        </WrapperFooter>
      </Container>
    </EventProvider>
  );
}

export default withEvent(EventManagement);
