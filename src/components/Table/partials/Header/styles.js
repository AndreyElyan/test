import styled from 'styled-components';

import { Container as ContainerRow } from '../Row/styles';

export const Container = styled.div`
  ${ContainerRow} {
    &:hover {
      background: transparent;
    }
  }
`;
