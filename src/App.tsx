import React from 'react';
import MainLayout from './layouts/mainLayout'
import './App.css';

import { Profile, ProfileRankings } from './containers'
import { Route, Switch } from 'react-router-dom'
function App() {
  let routes = (
    <Switch>
      <Route exact path="/profile/:profile_id" component={Profile}></Route>
      <Route exact path="/profile/:profile_id/rankings" component={ProfileRankings}></Route>
    </Switch>
  )
  return (
    <MainLayout>
        {routes}
    </MainLayout>
  );
}

export default App;
