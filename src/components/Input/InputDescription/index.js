import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, InputStyles, IconWrapper } from './styles';

let id = 0;

function InputDescription({
  width,
  height,
  icon,
  label,
  description,
  background,
  onChange,
  ...props
}) {
  useEffect(() => {
    id += 1;
  }, []);

  const labelFor = `${id}-label`;

  return (
    <Container width={width} height={height} background={background}>
      {label && <label htmlFor={labelFor}>{label}</label>}
      {description && <p>{description}</p>}

      <div>
        <InputStyles
          id={labelFor}
          {...props}
          onChange={event => onChange(event.target.value)}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </div>
    </Container>
  );
}

InputDescription.defaultProps = {
  width: '500px',
  height: '45px',
  onChange: () => {},
};

InputDescription.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.any,
};

export default memo(InputDescription);
