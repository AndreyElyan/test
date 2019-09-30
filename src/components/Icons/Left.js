import React from 'react';
import PropTypes from 'prop-types';

const Left = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
  >
    <defs>
      <path
        id="a"
        d="M20.199 11.51a1.077 1.077 0 0 1 1.448 1.595l-5.923 5.384a1.077 1.077 0 0 1-1.448 0l-5.923-5.384A1.077 1.077 0 1 1 9.8 11.51L15 16.237l5.199-4.726z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use
        fill={color}
        fillRule="nonzero"
        transform="rotate(90 15 15)"
        xlinkHref="#a"
      />
      <g fill={color} mask="url(#b)">
        <path d="M0 0h30v30H0z" />
      </g>
    </g>
  </svg>
);

Left.defaultProps = {
  color: '#fe324b',
};

Left.propTypes = {
  color: PropTypes.string,
};

export default Left;
