import styled from 'styled-components';
import { darken } from 'polished';
import { simpleFlex } from '../../../../../styles/mixins';

export const Container = styled.div``;

export const SponsorClass = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  height: 700px;
  background: #ffffff;

  border-radius: 3px;
  width: 430px;

  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);

  header {
    margin-top: 30px;
    margin-left: 30px;
    padding-bottom: 60px;
    width: 100%;
    height: fit-content;

    strong {
      height: fit-content;
      font-size: 20px;
      font-weight: normal;
      color: #333333;
    }
  }
`;

export const WrapperSponsors = styled.div`
  ${simpleFlex}
  margin-top: 20px;
  width: 100%;
  justify-content: center;

  h1 {
    padding-right: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #020202;
  }
`;

export const Button = styled.button`
  ${simpleFlex}
  justify-content: center;
  padding: 0 10px;
  background-color: #fe324b;
  width: 180px;
  height: 50px;
  border-radius: 3px;
  border: solid 1px #fe324b;
  margin-right: 25px;
  margin-top: 20px;

  strong {
    font-size: 14px;
    color: #fff;
    margin-left: 6px;
  }
  &:hover {
    background: ${({ theme }) => darken(0.03, theme.red)};
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const WrapperButtonClass = styled.div`
  ${simpleFlex}
  margin-top: 425px;
  flex-direction: row-reverse;
`;
