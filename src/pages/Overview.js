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
        this.setState({isLoading: false, sessions: json});
        this.forceUpdate();
    }


    render() {
        let content;
        let isLoading = this.state.isLoading;
        let sessions = this.state.sessions;

        console.log("render : " + isLoading + " ; " + sessions.length);
        console.log(content);

        let statusMessage = isLoading ? this.loadingMessage : 
            !sessions.length ? this.errorMessage : ""; 

        return <div>
                <h3> Logged Duck Feeding Sessions </h3>
                <p>{statusMessage}</p>

                {sessions.map((s,i) => 
                     <li key={i}>
                        <span> {s['duck_count']} ducks fed at location: {s['location']} at time: {s['feeding_time']}. </span>
                     </li>
                )}

                <hr />
                <p>Note, I do not have enough time to figure out how to trigger another render of the Layout component from the Overview component once its state is updated -- so this page doesnt have the same layout as the others. As such, you will just have to click 'Back' in your browser to return to your previous page (or navigate directly with a url).</p>

            </div>
    }

};
