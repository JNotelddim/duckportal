import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import DuckFeeding from './pages/DuckFeeding.js';
import NotFound from './notfound.js';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/DuckFeeding" component={DuckFeeding}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
