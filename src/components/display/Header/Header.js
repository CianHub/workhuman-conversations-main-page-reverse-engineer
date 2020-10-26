import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import WidgetsIcon from '@material-ui/icons/Widgets';
import TuneIcon from '@material-ui/icons/Tune';

import './Header.css';
import Profile from '../Profile/Profile';

const Header = () => {
  return (
    <header className="app-content-header">
      <Profile subtitle={'Viewing:'} />
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

export default Header;
