import React from 'react';
import PropTypes from 'prop-types';

import './RoundedImage.css';

const RoundedImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="app-rounded-img" />;
};

RoundedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default RoundedImage;
