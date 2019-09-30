import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #0f1b46;
`;

export const Content = styled.div`
  display: flex;

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
