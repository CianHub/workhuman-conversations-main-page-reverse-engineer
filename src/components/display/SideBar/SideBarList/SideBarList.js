import React, { useContext } from 'react';
import { CharacterContext } from '../../../../state/CharacterState/CharacterContext';

import './SideBarList.css';

const SideBarList = () => {
  const characters = useContext(CharacterContext)[0];

  return (
    <ul className="app-sidebar-list">
      {characters.characters.map((character) => (
        <li key={character}>{character}</li>
      ))}
    </ul>
  );
};

export default SideBarList;
