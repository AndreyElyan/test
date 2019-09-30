import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row';

import { Container } from './styles';

function Header({ children }) {
  return (
    <Container>
      <Row>{children}</Row>
    </Container>
  );
}

Header.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Header;
