import styled from 'styled-components';
import { simpleFlex } from '../../styles/mixins';

const stylesDefault = `
  border: 1px solid #e4e4e4;
  background-color: #ffffff;
  border-radius: 3px;
`;

export const Container = styled.div`
  min-width: ${props => props.width};
  min-height: ${props => props.height};

  > div {
    ${simpleFlex};
    ${stylesDefault}
    border: 1px solid #e4e4e4;
    background-color: #ffffff;
    width: ${props => props.width};
    height: ${props => props.height};
  }

  label {
    color: #a0a0a0;
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 10px;
    display: block;
  }
`;

export const InputStyles = styled.input`
  border: 0;
  height: 100%;
  flex: 1;
  padding: 0 0 0 10px;
  background: transparent;

  &::placeholder {
    color: #979797;
    font-size: 13px;
    font-weight: 600;
  }
`;

export const IconWrapper = styled.div`
  ${simpleFlex};
  height: 100%;
  width: fit-content;
`;
