import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dash from './Dash';
import Class from './Class';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dash}/>
      <Route path='/class' component={Class}/>
    </Switch>
  </main>
);

export default Main
