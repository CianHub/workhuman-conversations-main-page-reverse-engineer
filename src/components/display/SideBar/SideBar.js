import React from 'react';

import './SideBar.css';
import SideBarList from './SideBarList/SideBarList';

const SideBar = () => {
  return (
    <div className="app-sidebar">
      <SideBarList />
    </div>
  );
};

export default SideBar;
