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
  // 0 - english, 1 - hebrew
  const [lang, setLang] = useState(0);

  const changeLang = (newLang) => {
    setLang(newLang);
  };

  return (
    <div className="App">
       <Router>
         <div>    

          <Switch>
            <Route exact path='/:navItem'>
              <Navigator lang={lang} changeLang={changeLang}/>
            </Route>
            <Redirect to = '/videos' />
          </Switch>

         </div>
       </Router>
    </div>
  );
}

export default App;
