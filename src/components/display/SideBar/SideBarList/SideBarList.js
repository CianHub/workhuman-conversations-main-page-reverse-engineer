import React, { useContext } from 'react';
import { CharacterContext } from '../../../../state/CharacterState/CharacterContext';

import './SideBarList.css';

const SideBarList = () => {
  const characters = useContext(CharacterContext)[0];

  return (
    <div className="app-sidebar-list">
      {characters.characters.map((character) => (
        <div key={character}>
          <p>{character}</p>
        </div>
      ))}
    </div>
  );
};

export default SideBarList;
