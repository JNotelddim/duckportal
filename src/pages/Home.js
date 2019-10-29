import React, { Component } from 'react';
import Layout from '../comp/Layout.js';

export default class Home extends Component{
    
    render() {
        return <Layout>
                <h3> Home Page</h3>
                <p>Did you feed some ducks recently and want to log it? Go to 'Feed Ducks'.</p>
            </Layout>
    }

};
