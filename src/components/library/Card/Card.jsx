import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const Card = ({ light, className, children }) => (
  <div
    className={classNames(
      'visor-card',
      { 'visor-card--light': light },
      className,
    )}
  >
    {children}
  </div>
);

Card.defaultProps = {
  light: false,
  className: '',
};

Card.propTypes = {
  light: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
