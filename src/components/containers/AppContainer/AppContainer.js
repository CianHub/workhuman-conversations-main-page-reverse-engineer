import React from 'react';
import PropTypes from 'prop-types';

import SideBar from '../../display/SideBar/SideBar';
import ContentContainer from '../ContentContainer/ContentContainer';
import './AppContainer.css';

const AppContainer = (props) => {
  return (
    <div class="app-container">
      <SideBar />
      <ContentContainer />
    </div>
  );
};

AppContainer.propTypes = {};

export default AppContainer;
