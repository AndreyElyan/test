import styled from 'styled-components';
import { simpleFlex } from '../../styles/mixins';

export const Container = styled.footer`
  ${simpleFlex};
  height: 80px;
  justify-content: center;

  background: #ffffff;

  button.aeeo {
    background: ${({ theme }) => theme.red};
    color: #fff;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 0;
    margin-right: 10px;
  }
  button {
    background: #fff;
    color: #333333;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 0;
    margin-right: 10px;
    font-weight: 600;
  }
`;
