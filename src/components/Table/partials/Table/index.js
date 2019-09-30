import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Table({ children }) {
  return <Container>{children}</Container>;
}

Table.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Table;
