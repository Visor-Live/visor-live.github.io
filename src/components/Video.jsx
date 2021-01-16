import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bit/emperorjack.refinery-ui.atoms.text';

const Video = ({ name, src, caption }) => (
  <div className="video">
    <iframe
      title={name}
      width="1024"
      height="576"
      src={src}
      frameBorder="0"
      allowFullScreen
    />

    <Text size="16">
      {caption}
    </Text>
  </div>
);

Video.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Video;
