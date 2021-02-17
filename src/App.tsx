import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Profile } from './containers'
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/profile/:profile_id" component={Profile}></Route>
      </Switch>
    </div>
  );
}

export default App;
