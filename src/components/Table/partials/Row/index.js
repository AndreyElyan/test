import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Row({ children, height }) {
  return <Container height={height}>{children}</Container>;
}

Row.defaultProps = {
  height: '50px',
};

Row.propTypes = {
  children: PropTypes.any.isRequired,
  height: PropTypes.string,
};

export default Row;
