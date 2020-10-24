import React from 'react';
import PropTypes from 'prop-types';

import './ContentContainer.css';
import Header from '../../display/Header/Header';
import Content from '../../display/Content/Content';

const ContentContainer = (props) => {
  return (
    <div className="app-content-container">
      <Header />
      <Content />
    </div>
  );
};

ContentContainer.propTypes = {};

export default ContentContainer;
