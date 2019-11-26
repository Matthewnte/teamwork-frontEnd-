import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import SignUp from './views/Signup';
import Signin from './views/Signin';
import NoMatch from './views/NoMatch';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/signup' component={ SignUp } />
        <Route path='/signin' component={ Signin } />
        <Route component={ NoMatch } />
      </Switch>
    </div>
  );
}

export default App;
