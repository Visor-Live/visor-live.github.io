import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ url, children }) => (
  <a
    href={url}
    className="text-link"
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

Link.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
