import React, { useContext } from 'react';
import { CharacterContext } from '../../../../state/CharacterState/CharacterContext';
import { actions } from '../../../../state/CharacterState/CharacterReducer';
import RoundedImage from '../../RoundedImage/RoundedImage';

import './SideBarList.css';

const SideBarList = () => {
  const [{ characters, currentCharacter }, dispatch] = useContext(
    CharacterContext
  );

  return (
    <div className="app-sidebar-list">
      {characters
        .filter((character) => character.id !== currentCharacter.id)
        .map((character) => (
          <div
            key={character.id}
            className="app-sidebar-list-item"
            onClick={() =>
              dispatch({
                type: actions.changeCurrentCharacter,
                payload: character,
              })
            }
          >
            <RoundedImage
              src={character.img}
              alt={character.name}
              height={'30px'}
              width={'30px'}
              className="app-sidebar-list-item-img"
            />
            <span className="app-sidebar-list-item-text">{character.name}</span>
          </div>
        ))}
    </div>
  );
};

export default SideBarList;
