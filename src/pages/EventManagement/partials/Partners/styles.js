import styled from 'styled-components';
import { darken } from 'polished';

import { simpleFlex, container } from '../../../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex}
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  background: #f9f9f9f9;
`;

export const NewPartner = styled.div`
  display: flex;

  flex-wrap: wrap;
  height: 660px;
  background: #ffffff;
  border-radius: 3px;
  width: 690px;

  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);

  header {
    margin-top: 30px;
    margin-left: 30px;
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

export const SponsorClass = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  height: 660px;
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

export const WrapperRegisters = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 420px;
  width: 1150px;
  margin-right: 50px;
  background: #ffffff;
  border-radius: 3px;

  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);

  header {
    display: block;
    margin-top: 30px;
    margin-left: 30px;
    width: 100%;
    height: fit-content;
    padding-bottom: 20px;

    strong {
      font-size: 20px;
      font-weight: normal;
      color: #333333;
    }
  }
`;

export const WrapperImg = styled.div`
  ${simpleFlex}
  padding: 0 35px;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  padding-bottom: 65px;
`;

export const LabelWrapper = styled.div`
  margin-top: 20px;
  ${simpleFlex}

  div {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #333333;
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

export const Content = styled.div`
  ${simpleFlex}
  width: fit-content;
  flex-wrap: wrap;
  flex-direction: column;

  div.inputs {
    padding-top: 18px;

    a {
      font-size: 13px;
      font-weight: 600;
      color: #fe324b;
    }
  }
`;

export const HeaderRow = styled.div`
  ${simpleFlex};
  justify-content: space-between;
  padding: 0 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TableWrapper = styled.div`
  ${container};
  padding: 0 30px;
  margin-top: 30px;
`;

export const WrapperSelect = styled.div`
  ${simpleFlex}
  flex-direction: row;
  width: 100%;
  margin-top: 67px;
`;

export const LabelSelect = styled.strong`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #a0a0a0;
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
  margin-top: 245px;
  flex-direction: row-reverse;
`;

export const WrapperButtonPartner = styled.div`
  ${simpleFlex}
  width: 100%;
  margin-top: 15px;
  flex-direction: row-reverse;
`;
