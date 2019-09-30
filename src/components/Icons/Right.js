import React from 'react';
import PropTypes from 'prop-types';

const Right = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
  >
    <defs>
      <path
        id="a"
        d="M17.32 16H10.5a1 1 0 1 1 0-2h6.829l-1.59-1.848a1 1 0 0 1 1.517-1.304l3.002 3.49a1 1 0 0 1 .002 1.303l-3.003 3.51a1 1 0 1 1-1.52-1.301L17.32 16z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill={color} fillRule="nonzero" xlinkHref="#a" />
      <g fill={color} mask="url(#b)">
        <path d="M0 0h30v30H0z" />
      </g>
    </g>
  </svg>
);

Right.defaultProps = {
  color: '#fe324b',
};

Right.propTypes = {
  color: PropTypes.string,
};

export default Right;
