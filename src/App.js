import React, { useState } from 'react';
import Navigator from './components/Navigator';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";



const App = () => {

  return (
    <div className="App">
       <Router>
         <div>    

          <Switch>
            <Route exact path='/:navItem'>
              <Navigator />
            </Route>
            <Redirect to = '/videos' />
          </Switch>

         </div>
       </Router>
    </div>
  );
}

export default App;
