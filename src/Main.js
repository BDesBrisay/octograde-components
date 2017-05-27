import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = () => (
  <h1>Home</h1>
);

const Roster = () => (
  <h1>Roster</h1>
);

const Schedule = () => (
  <h1>Schedule</h1>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
);

export default Main
