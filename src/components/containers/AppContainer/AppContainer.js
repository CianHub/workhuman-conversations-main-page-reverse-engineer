import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import SideBar from '../../display/SideBar/SideBar';
import ContentContainer from '../ContentContainer/ContentContainer';
import './AppContainer.css';
import { CharacterContext } from '../../../state/CharacterState/CharacterContext';
import { actions } from '../../../state/CharacterState/CharacterReducer';

const AppContainer = (props) => {
  const [state, dispatch] = useContext(CharacterContext);
  console.log(state);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people').then((res) => {
      const newCharacters = res.data.results.map((character) => character.name);
      dispatch({
        type: actions.addCharacter,
        payload: newCharacters,
      });
    });
  }, []);

  return (
    <div className="app-container">
      <SideBar />
      <ContentContainer />
    </div>
  );
};

AppContainer.propTypes = {};

export default AppContainer;
