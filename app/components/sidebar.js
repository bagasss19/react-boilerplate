import React from 'react';

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function Sidebar() {
  return (
    <>
      <ProSidebar className={{border : "2px"}}>
        <Menu iconShape="square">
          <MenuItem>Home</MenuItem>
          <SubMenu title="Learning">
            <MenuItem>Courses</MenuItem>
            <MenuItem>Learning Plans</MenuItem>
          </SubMenu>
          <SubMenu title="Manage">
            <MenuItem>Users</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Reports</MenuItem>
            <MenuItem>Analytics</MenuItem>
            <MenuItem>Announcements</MenuItem>
          </SubMenu>
          <SubMenu title="Configure">
            <MenuItem>Points</MenuItem>
            <MenuItem>Reward</MenuItem>
            <MenuItem>Email Templates</MenuItem>
            <MenuItem>Company Info</MenuItem>
            <MenuItem>Billing</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </>
  );
}

export default Sidebar;
