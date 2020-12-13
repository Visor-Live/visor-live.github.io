import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const TEXT_TYPES = [
  'primary',
  'secondary',
  'tertiary',
];

const TEXT_SIZES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  20: 'p',
  18: 'p',
  16: 'p',
  14: 'p',
  12: 'p',
  10: 'p',
  8: 'p',
};

const Text = ({
  type,
  size,
  className,
  children,
  ...props
}) => {
  const Component = TEXT_SIZES[size];

  return (
    <Component
      className={classNames(
        'visor-text',
        `visor-text--${type}`,
        `visor-text--${size}`,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Text.defaultProps = {
  type: 'primary',
  size: '14',
  className: '',
};

Text.propTypes = {
  type: PropTypes.oneOf(TEXT_TYPES),
  size: PropTypes.oneOf(Object.keys(TEXT_SIZES)),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Text;
