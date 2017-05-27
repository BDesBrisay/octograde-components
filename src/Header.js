import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/svg-icons/action/home';

export default function Header() {
  return (
    <AppBar
      title='Octograde'
      titleStyle={{fontFamily: 'Pacifico', textAlign: 'center'}}
      iconElementLeft={<IconButton><ActionHome /></IconButton>}
      iconElementRight={
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText={'Darth Jar Jar'} />
          <MenuItem primaryText='Settings' />
          <MenuItem primaryText='Help' />
          <MenuItem primaryText='Sign out' />
        </IconMenu>
      }
    />
  );
};
