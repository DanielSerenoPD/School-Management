import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
       <SideBar/>
    <Switch>
  <Route exact path = "/Home">
    <Home/>
  </Route>
    </Switch>
    </React.Fragment>
  );
}

export default App;
