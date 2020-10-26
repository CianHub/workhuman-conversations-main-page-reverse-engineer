import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RoundedImage from '../RoundedImage/RoundedImage';
import { CharacterContext } from '../../../state/CharacterState/CharacterContext';

const Profile = ({ subtitle, character }) => {
  const [{ currentCharacter }] = useContext(CharacterContext);

  return (
    <div className="app-content-header-profile">
      <RoundedImage
        src={character ? character.img : currentCharacter.img}
        alt={character ? character.name : currentCharacter.name}
        width={'30px'}
        height={'30px'}
      />
      <div className="app-content-header-profile-text">
        <span className="app-content-header-profile-text-viewing">
          {subtitle}
        </span>
        <span className="app-content-header-profile-text-username">
          {character ? character.name : currentCharacter.name}
        </span>
      </div>
    </div>
  );
};

Profile.propTypes = { subtitle: PropTypes.string, character: PropTypes.object };

export default Profile;
