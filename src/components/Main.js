import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage.js';
import AddMoviePage from '../pages/AddMoviePage.js';
import GetMoviePage from '../pages/GetMoviePage.js';


const Main = () => {
    return (
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/add" component={AddMoviePage}/>
          <Route exact path="/get/:id" component={GetMoviePage}/>
        </Switch>
    );
};

export default Main;
