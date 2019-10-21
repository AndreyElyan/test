import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';
import { simpleFlex, container } from '../../../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex}
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  background: #f9f9f9f9;
`;

export const NewSpeaker = styled.div`
  ${simpleFlex}
  flex-wrap: wrap;
  height: 360px;
  background: #ffffff;
  border-radius: 3px;
  width: 100%;

  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
`;

export const ListSpeakers = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 30px;
  height: fit-content;
  background: #ffffff;
  border-radius: 3px;
  width: 100%;

  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
`;

export const WrapperSpeaker = styled.div`
  ${simpleFlex}
  flex-wrap: wrap;
  width: 100%;
  margin-top: 90px;
  flex-direction: row;
  justify-content: space-between;

  div.image {
    ${simpleFlex}
    padding: 0 45px;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5px;
    width: fit-content;
  }
`;

export const Anchor = styled(Link)`
  margin-top: 20px;
  margin-left: 20px;
  strong {
    color: #4a90e2;
    margin-top: 15px;
    font-size: 13px;

    font-weight: 600;
  }
  &:hover {
    opacity: 1;
  }
`;

export const WrapperInputs = styled.div`
  ${simpleFlex}
  margin-bottom: 20px;
  justify-content: space-between;
  flex-direction: column;
  height: 150px;

  strong {
    margin-top: 10px;
    align-self: flex-start;
    margin-left: 3px;
    font-size: 14px;
    font-weight: 600;

    color: #a0a0a0;
  }
`;

export const WrapperDescription = styled.div`
  ${simpleFlex}
  padding: 0 45px;
  justify-content: space-between;
  flex-direction: column;
  height: 130px;
  margin-bottom: 35px;

  strong {
    align-self: flex-start;
    margin-left: 3px;
    font-size: 14px;
    font-weight: 600;

    color: #a0a0a0;
  }
`;

export const TableWrapper = styled.div`
  ${container};
  padding: 0 30px;
  margin-top: 30px;
`;

export const LabelWrapper = styled.div`
  margin-top: 20px;
  ${simpleFlex}

  div {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #000;
  }

  span {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 13px;
    font-weight: 600;
    color: #333333;
    margin: 0 10px 0 15px;
  }
`;
export const Header = styled.header`
  height: 70px;
  display: flex;
  justify-content: space-between;

  strong {
    margin-top: 30px;
    margin-left: 30px;
    height: fit-content;
    font-size: 20px;
    font-weight: normal;
    color: #333333;
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

export const WrapperButton = styled.div`
  ${simpleFlex}
  margin-bottom: 20px;
  flex-direction: row-reverse;
  width: 100%;
  padding: 0 45px;
`;

export const Button = styled.button`
  width: 188px;
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
    padding: 0 10px;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
  }

  &:hover {
    background: ${({ theme }) => darken(0.03, theme.red)};
  }

  img {
    width: 30px;
    height: 30px;
  }
`;
