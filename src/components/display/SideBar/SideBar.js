import React from 'react';

import './SideBar.css';
import SideBarHeader from './SideBarHeader/SideBarHeader';
import SideBarList from './SideBarList/SideBarList';

const SideBar = () => {
  return (
    <div className="app-sidebar">
      <SideBarHeader />
      <SideBarList />
    </div>
  );
};

export default SideBar;
