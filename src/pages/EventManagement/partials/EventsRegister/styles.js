import styled, { css } from 'styled-components';

import { darken } from 'polished';
import { Container as CalendarContainer } from '../../../../components/Calendar/styles';

import { simpleFlex } from '../../../../styles/mixins';
import Label from '../../../../styles/Label';

export const Container = styled.div`
  ${simpleFlex}
  justify-content: space-between;

  width: 100%;
  height: 520px;
  max-width: 1140px;
  background: #f9f9f9f9;
`;

export const WrapperEvents = styled.div`
  background: #ffffff;
  border-radius: 3px;
  width: 100%;
  max-width: 750px;
  height: 100%;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);

  header {
    display: block;
    ${simpleFlex}
    width: 100%;
    height: 60px;

    strong {
      font-size: 20px;
      font-weight: normal;
      color: #333333;
      margin-left: 30px;
      margin-top: 30px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 35px;
  padding: 0 30px;
  width: fit-content;
  max-width: 750px;

  strong {
    color: #a0a0a0;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  div.grid {
    justify-content: space-between;
    flex-direction: row;
    margin-top: 30px;
  }
`;

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

export const WrapperAbove = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const WrapperTrails = styled.div`
  display: flex;
  width: 535px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ButtonStyle = styled.button`
  width: 167px;
  height: 50px;
  background-color: ${({ theme }) => theme.red};
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0 10px;

  strong {
    margin-top: 5px;
    font-weight: 600;
    font-size: 14px;
    padding: 0 8px;
    color: #fff;
  }

  &:hover {
    background: ${({ theme }) => darken(0.03, theme.red)};
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const WrapperInterest = styled.form``;

export const CalendarOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const WrapperInput = styled.div`
  position: relative;
  margin-right: 15px;

  input {
    cursor: pointer;
  }

  ${CalendarContainer} {
    position: absolute;
    right: 0;
    top: 52px;
    opacity: 0;
    visibility: hidden;
    z-index: 2;

    ${props =>
      props.isOpenCalendar &&
      css`
        opacity: 1;
        visibility: visible;
      `}
  }

  ${CalendarOverlay} {
    display: ${props => (props.isOpenCalendar ? 'block' : 'none')};
  }
`;

export const ContentTags = styled.div`
  ${simpleFlex};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 35px;
`;

export const WrapperLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const LabelDate = styled.div`
  ${Label}
`;

export const LabelStatus = styled.div`
  ${Label}
  margin-right: 300px;
`;

export const LabelTrail = styled.div`
  ${Label}
`;
