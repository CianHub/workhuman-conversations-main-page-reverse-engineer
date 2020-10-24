import React from 'react';
import PropTypes from 'prop-types';
import RoundedImage from '../../RoundedImage/RoundedImage';

import './SideBarHeader.css';

function SideBarHeader(props) {
  return (
    <>
      <div className="app-sidebar-header-title">Conversations</div>

      <div className="app-sidebar-header">
        <RoundedImage
          src={
            'https://img4.wikia.nocookie.net/__cb20080815045819/starwars/images/thumb/7/73/Chewbaccaheadshot.jpg/500px-Chewbaccaheadshot.jpg'
          }
          alt="avatar"
        />
        <div className="app-sidebar-name">Chewbacca</div>
        <div className="app-sidebar-dashboard-text">View Your Dashboard</div>
      </div>
    </>
  );
}

export default SideBarHeader;
