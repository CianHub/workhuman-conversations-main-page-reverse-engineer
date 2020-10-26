import React from 'react';

import PropTypes from 'prop-types';
import ContentBoxContent from '../ContentBox/ContentBoxContent/ContentBoxContent';
import ContentBoxHeader from '../ContentBox/ContentBoxHeader/ContentBoxHeader';

import './ContentColumn.css';

const ContentColumn = ({ title, color, data }) => {
  return (
    <div className="app-content-column">
      <ContentBoxHeader title={title} color={color} />
      {data.map((item, idx) => (
        <ContentBoxContent type={title} dataItem={item} key={title + idx} />
      ))}
    </div>
  );
};

ContentColumn.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default ContentColumn;
