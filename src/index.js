import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home.js';
import DuckFeeding from './pages/DuckFeeding.js';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/DuckFeeding" component={DuckFeeding}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
