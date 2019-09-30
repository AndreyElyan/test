import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

import { simpleFlex, container } from '../../styles/mixins';

import Container from '../../components/Container';

export const ContainerWrapper = styled(Container)`
  height: 100%;
  background: #f9f9f9;
  margin-top: 30px;
`;

export const Content = styled.div`
  background: #ffffff;
  margin: 30px 0 50px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  justify-content: space-between;

  strong {
    font-size: 20px;
    color: #333333;
    font-weight: normal;
    margin-top: 30px;
    margin-left: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HeaderRow = styled.div`
  ${simpleFlex};
  justify-content: space-between;
  padding: 0 30px;
`;

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

export const TableWrapper = styled.div`
  ${container};
  padding: 0 30px;
  margin-top: 30px;
`;
