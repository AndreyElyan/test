import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, InputStyles, IconWrapper } from './styles';

let id = 0;

function Input({ width, height, icon, label, onChange, ...props }) {
  useEffect(() => {
    id += 1;
  }, []);

  const labelFor = `${id}-label`;

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <Container width={width} height={height}>
      {label && <label htmlFor={labelFor}>{label}</label>}
      <div>
        <InputStyles id={labelFor} {...props} onChange={handleChange} />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </div>
    </Container>
  );
}

Input.defaultProps = {
  width: '500px',
  height: '45px',
};

Input.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.any,
};

export default memo(Input);
