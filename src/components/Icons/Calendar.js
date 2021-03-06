import React from 'react';
import PropTypes from 'prop-types';

const CalendarIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
  >
    <defs>
      <path
        id="a"
        d="M6 11.273h18V7.818h-1.636v.818a1 1 0 0 1-1 1h-3.637a1 1 0 0 1-1-1v-.818h-3.454v.818a1 1 0 0 1-1 1H8.636a1 1 0 0 1-1-1v-.818H6v3.455zm0 2V24h18V13.273H6zm7.273-7.455h3.454V5a1 1 0 0 1 1-1h3.637a1 1 0 0 1 1 1v.818h1.722c1.062 0 1.914.847 1.914 1.902v16.378C26 25.143 25.14 26 24.089 26H5.91A1.901 1.901 0 0 1 4 24.098V7.72c0-1.045.862-1.902 1.914-1.902h1.722V5a1 1 0 0 1 1-1h3.637a1 1 0 0 1 1 1v.818zm-2 1.818V6H9.636v1.636h1.637zm9.09 0V6h-1.636v1.636h1.637z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill={color} xlinkHref="#a" />
      <g fill={color} mask="url(#b)">
        <path d="M0 0h30v30H0z" />
      </g>
    </g>
  </svg>
);

CalendarIcon.defaultProps = {
  color: '#fe324b',
};

CalendarIcon.propTypes = {
  color: PropTypes.string,
};

export default CalendarIcon;
