import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const ButtonStyle = styled(Link)`
  width: 167px;
  height: 50px;
  background-color: ${({ theme }) => theme.red};
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0 10px;

  strong {
    padding: 0 8px;
    color: #fff;
  }

  &:hover {
    background: ${({ theme }) => darken(0.03, theme.red)};
  }

  img {
    width: 30px;
    height: 30px;
  }
`;
