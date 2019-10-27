import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import './Layout.css';


class Layout extends Component{

    constructor(props){
        super(props);
        this.title = props.title ? props.title : "Ducks by JM";
        this.children = props.children;
        this.navItems = [
            {title: "Home", path: "/"},
            {title: "Feed Ducks", path: "/DuckFeeding"},
            {title: "Overview", path: "/Overview", disabled: true},
        ]
    }

    render(){
        return <div className="Layout">
                <head>
                    <title>{this.title}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </head>

                <nav className="sNav">
                    <ul>
                        {this.navItems.map(item =>
                            <li className="sLink"><Link to={item.path}>| {item.title}</Link></li>
                        )}
                    </ul>      
                    <hr />
                </nav>
            
                {this.children}
        
                <footer>
                    <hr />
                    <span>This app created for Freshworks.io by Jared Middleton</span>
                </footer>
            </div>
    }
}

export default Layout;
