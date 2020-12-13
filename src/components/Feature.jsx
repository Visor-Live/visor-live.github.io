import React from 'react';
import PropTypes from 'prop-types';
import Text from './library/Text';

const Feature = ({ title, description, src }) => (
  <div className="feature">
    <img src={`images/features/${src}`} alt={title} />

    <Text size="20">
      {title}
    </Text>

    <Text size="16" type="secondary">
      {description}
    </Text>
  </div>
);

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Feature;
