import React from 'react';

import { Container, Tabs, Item } from './styles';

export default function TabPanel({ links }) {
  return (
    <Container>
      <Tabs>
        {links.map(link => (
          <Item to={link.url} key={link.url} exact>
            {link.label}
          </Item>
        ))}
      </Tabs>
    </Container>
  );
}
