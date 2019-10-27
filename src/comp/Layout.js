import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

class Layout extends Component{

    constructor(props){
        super(props);
        this.title = props.title ? props.title : "Ducks by JM";
        this.children = props.children;
        this.navItems = [
            {title: "Feed Ducks", page: "DuckFeeding"},
            {title: "Summary", page: "Summary", disabled: true}
        ]
    }

    render(){
        return <div>
                <head>
                    <title>{this.title}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </head>
            
                {this.children}
        
                <BottomNavigation>
                    {this.navItems.map(item => 
                        <BottomNavigationAction label={item.title}></BottomNavigationAction>
                    )
                    }
                    
                </BottomNavigation>

                <footer>
                    <hr />
                    <span>This app created for Freshworks.io by Jared Middleton</span>
                </footer>
            </div>
    }
}

export default Layout;
