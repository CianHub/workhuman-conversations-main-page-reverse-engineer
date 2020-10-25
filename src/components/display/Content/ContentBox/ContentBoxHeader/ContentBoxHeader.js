import React from 'react';
import PropTypes from 'prop-types';

import AddCircleIcon from '@material-ui/icons/AddCircle';

import './ContentBoxHeader.css';

const ContentBoxHeader = ({ title, color }) => {
  return (
    <section
      className="app-content-box-header"
      style={{ backgroundColor: color }}
    >
      <h4 className="app-content-box-header-title">{title}</h4>
      <div className="app-content-box-header-right-side">
        <div className="app-content-box-header-bar" />
        <div className="app-content-box-header-buttons">
          <AddCircleIcon />
        </div>
        <div className="app-content-box-header-text">New</div>
      </div>
    </section>
  );
};

ContentBoxHeader.propTypes = {};

export default ContentBoxHeader;
