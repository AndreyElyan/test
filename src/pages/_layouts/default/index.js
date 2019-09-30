import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import SubHeader from '../../../components/SubHeader';

import { Wrapper } from './styles';

export default function DefaultLayout({ children, history }) {
  return (
    <Wrapper>
      <Header history={history} />
      <SubHeader />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
