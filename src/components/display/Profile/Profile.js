import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RoundedImage from '../RoundedImage/RoundedImage';
import { CharacterContext } from '../../../state/CharacterState/CharacterContext';

const Profile = ({ subtitle }) => {
  const [{ currentCharacter }] = useContext(CharacterContext);

  return (
    <div className="app-content-header-profile">
      <RoundedImage
        src={currentCharacter.img}
        alt={currentCharacter.name}
        width={'30px'}
        height={'30px'}
      />
      <div className="app-content-header-profile-text">
        <span className="app-content-header-profile-text-viewing">
          {subtitle}
        </span>
        <span className="app-content-header-profile-text-username">
          {currentCharacter.name}
        </span>
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
