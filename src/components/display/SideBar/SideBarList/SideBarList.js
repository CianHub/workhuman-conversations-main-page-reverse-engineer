import React, { useContext } from 'react';
import { CharacterContext } from '../../../../state/CharacterState/CharacterContext';
import RoundedImage from '../../RoundedImage/RoundedImage';

import './SideBarList.css';

const SideBarList = () => {
  const characters = useContext(CharacterContext)[0];

  return (
    <div className="app-sidebar-list">
      {characters.characters.map((character) => (
        <div key={character} className="app-sidebar-list-item">
          <RoundedImage
            src={
              'https://i.insider.com/5b64303942e1cc4d563ab9f1?width=1800&format=jpeg&auto=webp'
            }
            alt={'user'}
            height={'30px'}
            width={'30px'}
            className="app-sidebar-list-item-img"
          />
          <span className="app-sidebar-list-item-text">{character}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBarList;
