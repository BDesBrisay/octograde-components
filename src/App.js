import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500, blue700} from 'material-ui/styles/colors';

import Header from './Header';

export default function App() {
  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: blue500,
      primary2Color: blue700,
    },
  });

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Header />
    </MuiThemeProvider>
  );
}
