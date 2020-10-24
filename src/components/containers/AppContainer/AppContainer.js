import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import SideBar from '../../display/SideBar/SideBar';
import ContentContainer from '../ContentContainer/ContentContainer';
import './AppContainer.css';
import CharacterProvider, {
  CharacterContext,
} from '../../../state/CharacterState/CharacterContext';

const AppContainer = (props) => {
  const [state, updateState] = useContext(CharacterContext);

  useEffect = (() => {}, []);

  return (
    <div className="app-container">
      <SideBar />
      <ContentContainer />
    </div>
  );
};

AppContainer.propTypes = {};

export default AppContainer;
