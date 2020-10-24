import React from 'react';
import PropTypes from 'prop-types';

import './RoundedImage.css';

const RoundedImage = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="app-rounded-img"
      style={{ height, width }}
    />
  );
};

RoundedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default RoundedImage;
