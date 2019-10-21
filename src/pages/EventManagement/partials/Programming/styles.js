import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { Container as CalendarContainer } from '../../../../components/Calendar/styles';
import { simpleFlex, container } from '../../../../styles/mixins';
import Label from '../../../../styles/Label';

export const Container = styled.div`
  ${simpleFlex}
  flex-direction: column;
  width: 100%;

  max-width: 1200px;
  background: #f9f9f9f9;
`;

export const NewProgramming = styled.div`
  display: flex;
  flex-direction: column;
  height: 805px;
  background: #ffffff;
  border-radius: 3px;
  width: 100%;

  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
`;

export const Header = styled.div`
  display: block;
  margin-top: 30px;
  margin-left: 30px;
  width: 100%;
  height: fit-content;

  strong {
    font-size: 20px;
    font-weight: normal;
    color: #333333;
  }
`;

export const WrapperTitle = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

export const Registers = styled.div`
  margin: 30px;
  height: fit-content;
  background: #ffffff;
  border-radius: 3px;
  width: 100%;

  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
`;

export const WrapperPickers = styled.div`
  ${simpleFlex}
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 65px;
  width: 100%;
`;

export const WrapperDescription = styled.div`
  ${simpleFlex}
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 65px;
  width: 100%;
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
  margin-top: 30px;
  justify-content: space-between;
  padding: 0 30px;
`;

export const WrapperLabelSelect = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LabelSpeaker = styled.div`
  ${Label}
  margin-left: 65px;
`;

export const LabelType = styled.div`
  ${Label}
  margin-left: 285px;
`;

export const LabelMediator = styled.div`
  ${Label}
  margin-left: 275px;
`;

export const WrapperSelectSpeaker = styled.div`
  ${simpleFlex}
`;

export const WrapperSelectType = styled.div`
  ${simpleFlex}
  margin-left: 30px;
`;

export const WrapperSelectMediator = styled.div`
  ${simpleFlex}
  margin-left:55px;
`;

export const WrapperSelect = styled.div`
  ${simpleFlex}
  flex-direction: row;
  padding: 0 65px;
  width: 100%;
`;

export const Button = styled.button`
  width: 210px;
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
    padding: 0 30px;
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
export const WrapperButton = styled.div`
  ${simpleFlex}
  margin-left: 70px;
`;

export const CalendarOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const WrapperCalendar = styled.div`
  position: relative;
  margin-right: 15px;

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
