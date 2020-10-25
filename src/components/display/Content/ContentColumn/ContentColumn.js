import React from 'react';
import PropTypes from 'prop-types';
import ContentBoxContent from '../ContentBox/ContentBoxContent/ContentBoxContent';
import ContentBoxHeader from '../ContentBox/ContentBoxHeader/ContentBoxHeader';

import './ContentColumn.css';

const ContentColumn = ({ title, color }) => {
  return (
    <div className="app-content-column">
      <ContentBoxHeader title={title} color={color} />
      <ContentBoxContent />
    </div>
  );
};

ContentColumn.propTypes = {};

export default ContentColumn;
