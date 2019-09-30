import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { simpleFlex } from '../../styles/mixins';

export const Container = styled.div`
  ${simpleFlex}
  justify-content: center;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  height: 70px;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const Item = styled(NavLink)`
  ${simpleFlex};
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
  border-bottom: 1px solid #e4e4e4;
  width: 170px;
  height: 40px;
  position: relative;
  font-size: 14px;
  font-weight: 600;
  color: #a0a0a0;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    border-bottom: 3px solid #d34848;

    height: 2px;
    transition: 0.3s width ease-out;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }

  &.active {
    color: #333333;
    &:before {
      width: 100%;
    }
  }
`;
