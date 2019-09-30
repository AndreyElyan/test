import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: ${props => props.width};
  height: 100%;

  strong {
    color: #333333;
    font-weight: 600;
    font-size: 12px;
  }

  p {
    color: #333333;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px 0 0;
  }

  button {
    padding: 0 5px;
    background: transparent;
    border: 0;

    img {
      height: 8px;
      width: 8px;
    }
  }
`;
