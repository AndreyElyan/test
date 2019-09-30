import styled from 'styled-components';
import { simpleFlex } from '../../styles/mixins';

export const Container = styled.div`
  flex-direction: column;
  height: 100%;
  flex-wrap: wrap;
  width: 100%;
  background: #f9f9f9;
  justify-content: center;
  margin: 0 auto;
`;

export const WrapperBox = styled.div`
  ${simpleFlex}
  width: 100%;
  margin-top: 30px;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperFooter = styled.div`
  ${simpleFlex}
  width: 100%;
  position: relative;
  bottom: 0;
`;
