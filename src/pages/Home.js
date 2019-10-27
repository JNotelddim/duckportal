import React, { Component } from 'react';
import Layout from '../comp/Layout.js';

export default class Home extends Component{
    
    render() {
        return <div>
            <Layout>
                <p>This is the home page - to log a duck-feeding session, go to 'Feed Ducks'.</p>
            </Layout>
        </div>
    }

};
