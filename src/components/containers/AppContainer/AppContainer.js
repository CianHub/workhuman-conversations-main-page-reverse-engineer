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

  useEffect(() => {
    dispatch({
      type: actions.addCharacter,
      payload: [
        {
          id: 0,
          name: 'Chewbacca',
          img:
            'https://img4.wikia.nocookie.net/__cb20080815045819/starwars/images/thumb/7/73/Chewbaccaheadshot.jpg/500px-Chewbaccaheadshot.jpg',
        },
        {
          id: 1,
          name: 'Luke Skywalker',
          img:
            'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F03%2Fstar-wars-a-new-hope-2000.jpg',
        },
        {
          id: 2,
          name: 'Darth Vader',
          img:
            'https://www.denofgeek.com/wp-content/uploads/2018/01/vader-main.jpg?fit=1440%2C960',
        },
      ],
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
