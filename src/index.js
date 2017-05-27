import React from 'react';
import ReactDOM from 'react-dom';
import {blue500, blue700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/svg-icons/action/home';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
  },
});

const username = 'Darth Jar Jar'
// const profilePicture = 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
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
          <MenuItem primaryText={username} />
          <MenuItem primaryText='Settings' />
          <MenuItem primaryText='Help' />
          <MenuItem primaryText='Sign out' />
        </IconMenu>
      }
    />
  </MuiThemeProvider>
);

ReactDOM.render(
  // <Articles articles={articles}/>,
  // <Todo items={items}/>,
  <App />,
  document.getElementById('root')
);
