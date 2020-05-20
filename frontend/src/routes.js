
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import NewActivity from './pages/NewActivity';

export default function  Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/create" exact component={NewActivity}/>
            </Switch>
        </BrowserRouter>
    );
}