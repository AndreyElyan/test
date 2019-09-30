import styled from 'styled-components';

import { container, simpleFlex } from '../../styles/mixins';

export const Container = styled.div`
  ${container};
  display: flex;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  margin-top: 60px;
`;

export const RightWrapper = styled.div`
  ${simpleFlex};
  height: 100%;
  justify-content: center;
`;

export const WrapperTitles = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;
  margin: 60px 0 0 160px;
  max-width: 395px;

  h1 {
    font-size: 30px;
    color: #ffffff;
    font-weight: normal;

    small {
      font-size: 12px;
      font-weight: normal;
    }

    span {
      color: #ffffff;
    }
  }

  strong {
    color: #ffffff;
    font-size: 14px;
    font-weight: normal;
    margin-top: 10px;
    line-height: 1.71;
  }
`;

export const Form = styled.form`
  ${simpleFlex};
  background: #f9f9f9;
  flex-direction: column;
  border-radius: 4px;
  width: 360px;
`;

export const HeaderLogin = styled.header`
  display: flex;
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #e4e4e4;

  strong {
    color: #333333;
    font-size: 20px;
    margin: 20px 0 0 70px;
    font-weight: normal;
  }
`;

export const WrapperLogin = styled.div`
  ${simpleFlex}
  margin-top: 70px;
  flex-direction: column;
`;

export const InputLogin = styled.input`
  margin-top: 10px;
  background-color: #ffffff;

  border: 0;
  border-radius: 3px;
  height: 40px;
  width: 300px;
  border: solid 1px #e4e4e4;
  padding: 0 15px;

  color: #333;
  margin: 0 0 45px;

  &::placeholder {
    color: #979797;
  }

  span {
    color: #f64c75;
    align-self: center;
    margin: 0 0 10px;
    font-weight: bold;
  }
`;

export const WrapperFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const KeepConnected = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 25px;

  strong {
    color: #333333;
    font-weight: 600;
    font-size: 12px;
  }
`;

export const WrapperSignIn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  a {
    margin-top: 15px;
    font-size: 12px;
    color: #4a90e2;
    font-weight: 600;
    opacity: 0.2;

    &:hover {
      opacity: 1;
    }
  }
`;
