import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Layout.css';


class Layout extends Component{

    constructor(props){
        super(props);
        this.title = props.title ? props.title : "Ducks by JM";
        this.children = props.children;
        this.navItems = [
            {title: "Home", path: "/"},
            {title: "Feed Ducks", path: "/DuckFeeding"},
            {title: "Overview", path: "/Overview"},
            {title: "Unimplemented Page", path: "/UnimplementedPage"},
        ]
    }

    render(){
        return <div className="Layout">
                <nav className="sNav">
                    <ul>
                        {this.navItems.map((item, i) =>
                            <li className="sLink" key={i}><Link to={item.path}>| {item.title}</Link></li>
                        )}
                    </ul>      
                    <hr />
                </nav>
            
                <div className="layoutBody">
                    {this.children}
                </div>

                <footer>
                    <hr />
                    <span>This app created for Freshworks.io by Jared Middleton</span>
                </footer>
            </div>
    }
}

export default Layout;
