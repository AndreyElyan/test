import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  label {
    cursor: pointer;

    div {
      &:hover {
        opacity: 0.8;
        transition: 0.3s;
        background: #f1f1f5;
      }
    }

    input {
      display: none;
    }
  }
`;
