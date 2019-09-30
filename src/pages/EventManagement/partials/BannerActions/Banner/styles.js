import styled from 'styled-components';
import { darken } from 'polished';

import { simpleFlex } from '../../../../../styles/mixins';

export const WrapperStories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  height: 365px;
  background: #ffffff;
  border-radius: 3px;
  width: 100%;

  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);

  header {
    display: block;
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

export const WrapperImage = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 90px;
  margin-left: 45px;
  height: fit-content;
  align-items: center;
  flex-direction: column;

  label {
    color: blue;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  input {
    display: none;
  }
`;

export const WrapperText = styled.div`
  ${simpleFlex}
  height:100%;
  margin-left: 45px;
  flex-direction: column;
  justify-content: space-between;
  height: 290px;
  width: fit-content;
  position: relative;
  top: 20px;
`;

export const WrapperButton = styled.div`
  ${simpleFlex}
  flex-direction: row-reverse;
  width: 100%;
  height: 100px;
  margin-left: 220px;

  strong {
    position: relative;
    top: -9px;
  }
`;

export const ButtonDelete = styled.button`
  background: transparent;
  width: 146px;
  height: 50px;
  border-radius: 3px;
  border: solid 1px #fe324b;
  margin-right: 110px;
  margin-top: 20px;
  transition: 0.4s;

  &:hover {
    background: #fe505f;

    strong {
      font-size: 14px;
      font-weight: 600;
      color: #ffffff;
    }
  }
  strong {
    font-size: 14px;
    font-weight: 600;
    color: #fe324b;
  }
`;

export const LabelWrapper = styled.div`
  ${simpleFlex}
  margin-top: 20px;
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

export const FluxInput = styled.input`
  width: 800px;
  height: 41px !important;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #a0a0a0;
`;

export const ButtonAdd = styled.button`
  background-color: #fe324b;
  width: 146px;
  height: 50px;
  border-radius: 3px;
  border: solid 1px #fe324b;
  margin-right: 110px;
  margin-top: 20px;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => darken(0.06, theme.red)};
  }

  strong {
    color: #fff;
    margin-left: 6px;
  }
`;
