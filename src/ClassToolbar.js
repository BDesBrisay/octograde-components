import React from 'react';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

import FilterList from 'material-ui/svg-icons/content/filter-list';
import Search from 'material-ui/svg-icons/action/search';
import Refresh from 'material-ui/svg-icons/navigation/refresh';

const ClassToolbar = () => (
  <Toolbar style={{marginBottom: 20}}>
    <ToolbarGroup>
      <TextField
        hintText='Search'
        fullWidth={true}
        style={{minWidth: 100,}}
      />
      <IconButton>
        <Search />
      </IconButton>
    </ToolbarGroup>
    <ToolbarGroup>
      <IconMenu
        iconButtonElement={
          <FlatButton
            label="Filter"
            icon={<FilterList />}
          />
        }
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Send feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
      <IconButton
        tooltip='Refresh Stream'
        tooltipPosition='bottom-left'
      >
        <Refresh />
      </IconButton>
    </ToolbarGroup>
  </Toolbar>
);

export default ClassToolbar;
