import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar
    title='Octograde'
    titleStyle={{fontFamily: 'Pacifico', textAlign: 'center'}}
    iconElementLeft={<Link to="/"><IconButton><ActionHome color='white'/></IconButton></Link>}
    iconElementRight={
      <IconMenu
        iconButtonElement={<IconButton style={{padding: 0}}><Avatar src='http://pm1.narvii.com/6028/1e3c8d53a71135affe2a1ecdec7526cdfde912e9_128.jpg' /></IconButton>}
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

export default Header
