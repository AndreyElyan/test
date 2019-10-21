import styled from 'styled-components';
import { container, simpleFlex } from '../../styles/mixins';

export const Container = styled.div`
  ${container}
  background: #F7F6F7;
`;

export const WrapperImg = styled.div`
  ${simpleFlex}
  margin-top: 30px;
  border-radius: 4px;

  img {
    max-width: 1200px;
  }
`;
