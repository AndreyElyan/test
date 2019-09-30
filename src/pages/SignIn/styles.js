import styled from 'styled-components';
import { darken } from 'polished';

import Input from '../../components/Input';
import { Container as ContainerInput } from '../../components/Input/styles';

import { container, simpleFlex } from '../../styles/mixins';

export const Wrapper = styled.div`
  height: 100%;
  background: #0f1b46;
`;

export const Content = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const ContentHeader = styled.div`
  ${simpleFlex};
`;

export const DescriptionForm = styled.strong`
  ${simpleFlex}
  justify-content: center;
  margin-bottom: 25px;
  font-size: 12px;
  font-weight: 600;
  color: #333333;
`;

export const WrapperArrow = styled.div``;

export const Container = styled.div`
  ${container};
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  form {
    button {
      width: 120px;
      margin: 5px 0 0;
      margin-top: 30px;
      height: 44px;
      background: ${({ theme }) => theme.red};
      border: 0;
      border-radius: 4px;
      font-weight: normal;
      font-size: 16px;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${({ theme }) => darken(0.03, theme.red)};
      }
    }

    a {
      color: #4a90e2;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const LeftWrapper = styled.div`
  margin-top: 60px;
  justify-content: center;
  align-items: center;
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

  @media screen and (max-width: 950px) {
    h1 {
      display: none;
    }
    strong {
      display: none;
    }
  }

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

export const InputLogin = styled(Input)`
  span {
    color: #f64c75;
    align-self: center;
    margin: 0 0 10px;
    font-weight: bold;
  }
`;

export const Form = styled.form`
  ${simpleFlex};
  justify-content: space-between;
  background: #f9f9f9;
  flex-direction: column;
  border-radius: 4px;
  width: 360px;
  height: 430px;

  @media screen and (max-width: 950px) {
    margin-right: 300px;
  }
`;

export const HeaderLogin = styled.header`
  ${simpleFlex};
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
`;

export const TitleForm = styled.strong`
  color: #333333;
  font-size: 20px;
  font-weight: normal;
`;

export const WrapperLogin = styled.div`
  ${simpleFlex}
  margin-top: 20px;
  flex-direction: column;
  width: 100%;

  ${ContainerInput} + ${ContainerInput} {
    margin-top: 20px
  }
`;

export const WrapperFooter = styled.div`
  ${simpleFlex};
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const KeepConnected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 10px 0 0;

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
`;

export const Anchor = styled.div`
  cursor: pointer;
  margin-top: 10px;
  opacity: 0.8;
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
