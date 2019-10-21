import styled from 'styled-components';
import { simpleFlex } from '../../../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex};
  height: ${props => props.height};
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
  transition: background 0.3s;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;
