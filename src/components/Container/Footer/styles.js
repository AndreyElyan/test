import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import { simpleFlex } from '../../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex}
  width: 100%;
  margin-top: 80px;
  height: 85px;
  background: #ffffff;
`;

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0 110px;
  width: 100%;

  button.save {
    text-align: center;
    background: ${({ theme }) => theme.red};
    border: 0;
    height: 50px;
    width: 160px;
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
    border-radius: 5px;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => darken(0.1, theme.red)};
    }
  }
`;

export const ButtonStyle = styled(Link)`
  display: flex;
  padding: 0 25px;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  border: solid 1px #e4e4e4;
  width: 100px;
  height: 50px;

  strong {
    background: #ffffff;
    color: #333333;
    font-size: 16px;
    font-weight: 600;
  }
`;
