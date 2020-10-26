import React from 'react';

import './ContentContainer.css';
import Header from '../../display/Header/Header';
import Content from '../../display/Content/Content';

const ContentContainer = () => {
  return (
    <div className="app-content-container">
      <Header />
      <Content />
    </div>
  );
};

export default ContentContainer;
