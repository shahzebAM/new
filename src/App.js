
import { Button } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import NavigationIcon from '@material-ui/icons/Navigation';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Kurulus from './components/Kurulus';
import Home from './components/Home'
import Barbaroslar from './components/Barbaroslar'
import { useHistory } from "react-router-dom";




function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/osman' component={Kurulus} />
        <Route exact path='/barbarosa' component={Barbaroslar} />
        
        

      </Switch>
    </Router>

    </>
    
  )
}

export default App;
