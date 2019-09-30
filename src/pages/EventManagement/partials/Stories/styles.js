import styled from 'styled-components';

import { simpleFlex } from '../../../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex}
  flex-direction: column;
  width: 100%;

  max-width: 1200px;
  background: #f9f9f9f9;
`;
