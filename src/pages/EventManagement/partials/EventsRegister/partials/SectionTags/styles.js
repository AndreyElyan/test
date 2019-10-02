import styled from 'styled-components';
import { simpleFlex } from '../../../../../../styles/mixins';

export const Container = styled.div``;

export const WrapperTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  width: 100%;
  max-width: 360px;
  height: 100%;
  border-radius: 3px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);

  header {
    ${simpleFlex}

    display: block;
    width: 100%;
    height: 60px;
    margin-top: 30px;

    strong {
      font-size: 20px;
      font-weight: normal;
      color: #333333;
      margin-left: 30px;
      margin-top: 30px;
    }
  }
`;

export const WrapperInterest = styled.form``;

export const ContentTags = styled.div`
  ${simpleFlex};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 35px;
`;
