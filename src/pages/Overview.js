import React, { Component } from 'react';
import Layout from '../comp/Layout.js';

const API_URL = "https://duckapp-jm.herokuapp.com/feedingSessions/"
export default class Overview extends Component{
    
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            sessions: [],
            isLoading: true
        }
        this.loadingMessage = "Loading Logged Duck Feeding Sessions";
        this.errorMessage = "Could not get any sessions from server. ";
    
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async componentDidMount(){
        let response = await fetch(API_URL);
        let json = await response.json();
        this.setState({isLoading: false, sessions: json})
    }


    render() {
        let content = <p>{this.loadingMessage}</p>;
        let isLoading = this.state.isLoading;
        let sessions = this.state.sessions;

        if(!isLoading){

            if(!sessions || !sessions.length){
                content = <p>{this.errorMessage}</p>;
            } else {
                content = <ul>
                {
                     sessions.map((s,i) => 
                             <li key={i}>
                                <span> {s} fed. </span>
                             </li>
                        )   
                } </ul>;
            }
        }

        console.log("render : " + isLoading + " ; " + sessions.length);
        console.log(content);

        return <Layout>
                <h3> Logged Duck Feeding Sessions </h3>
                {content}
            </Layout>
    }

};
