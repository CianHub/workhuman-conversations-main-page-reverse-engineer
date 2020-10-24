import React from 'react';
import PropTypes from 'prop-types';
import RoundedImage from '../RoundedImage/RoundedImage';

import './Header.css';

const Header = (props) => {
  return (
    <header className="app-content-header">
      <div className="app-content-header-profile">
        <RoundedImage
          src={
            'https://img4.wikia.nocookie.net/__cb20080815045819/starwars/images/thumb/7/73/Chewbaccaheadshot.jpg/500px-Chewbaccaheadshot.jpg'
          }
          alt={'avatar'}
          width={'30px'}
          height={'30px'}
        />
        <div className="app-content-header-profile-text">
          <span className="app-content-header-profile-text-viewing">
            Viewing
          </span>
          <span className="app-content-header-profile-text-username">
            Chewbacca
          </span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
