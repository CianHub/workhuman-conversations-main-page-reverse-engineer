import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import WidgetsIcon from '@material-ui/icons/Widgets';
import TuneIcon from '@material-ui/icons/Tune';

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
      <div className="app-content-header-arrow">
        <ArrowForwardIosIcon />
      </div>
      <div className="app-content-header-links">
        <div className="app-content-header-links-dashboard">
          <WidgetsIcon />
          <span className="app-content-header-links-dashboard-text">
            Dashboard
          </span>
        </div>
        <div className="app-content-header-timeline">
          <TuneIcon />
          <span className="app-content-header-links-timeline-text">
            Timeline
          </span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
