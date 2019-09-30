import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Column({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Column.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Column;
