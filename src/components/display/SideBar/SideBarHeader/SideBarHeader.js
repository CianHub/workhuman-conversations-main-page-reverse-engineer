import React, { useContext } from 'react';
import ChatIcon from '@material-ui/icons/Chat';

import { CharacterContext } from '../../../../state/CharacterState/CharacterContext';
import RoundedImage from '../../RoundedImage/RoundedImage';

import './SideBarHeader.css';

function SideBarHeader(props) {
  const [{ currentCharacter }] = useContext(CharacterContext);
  return (
    <>
      <div className="app-sidebar-header-title">
        <ChatIcon />
        <span className="app-sidebar-header-title-text">Conversations</span>
      </div>

      <div className="app-sidebar-header">
        <RoundedImage src={currentCharacter.img} alt="avatar" />
        <div className="app-sidebar-name">{currentCharacter.name}</div>
        <div className="app-sidebar-dashboard-text">View Your Dashboard</div>
      </div>
    </>
  );
}

export default SideBarHeader;
