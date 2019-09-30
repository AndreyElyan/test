import styled from 'styled-components';

import { simpleFlex, container } from '../../../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex}
  width: 100%;
  max-width: 1200px;
  background: #f9f9f9f9;
`;

export const ParticipantsRegistered = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  background: #ffffff;
  border-radius: 3px;
  width: 100%;

  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
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

export const TableWrapper = styled.div`
  ${container};
  padding: 0 30px;
  margin-top: 30px;
`;

export const HeaderRow = styled.div`
  ${simpleFlex};
  justify-content: space-between;
  padding: 0 30px;
`;
