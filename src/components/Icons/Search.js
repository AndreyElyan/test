import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    {...props}
  >
    <defs>
      <path
        id="a"
        d="M11.18 20.097l-2.603 1.735a1 1 0 1 1-1.11-1.664l2.462-1.642a7 7 0 1 1 1.25 1.57zM15.977 20a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
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

Search.defaultProps = {
  color: '#fe324b',
};

Search.propTypes = {
  color: PropTypes.string,
};

export default Search;
