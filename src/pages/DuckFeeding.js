import React, { Component } from 'react';
import { TextField, FormControl, InputLabel, Input, Button} from '@material-ui/core';

import Layout from '../comp/Layout.js';

//const API_URL = "http://127.0.0.1:8000/feedingSessions/"
const API_URL = "https://duckapp-jm.herokuapp.com/feedingSessions/" //TODO: refactor constants into config file

export default class DuckFeeding extends Component{

    constructor(props){
        super(props);
        this.state = {
            time: "",
            duckNumber: 0,
            location: "",
            food: "",
            foodType: "",
            amount: ""
        };

        this.onChange= this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.putSessionInfo = this.putSessionInfo.bind(this);
    }

    onChange (event){
        this.state[event.target.name] = event.target.value;
    }
    
    handleSubmit(params){
        alert(this.state);
        this.putSessionInfo();
    }

    putSessionInfo(){
        console.log(this.state);
        
        let postBody = {}
        postBody['feeding_time'] = this.state.time;
        postBody['food'] = this.state.food;
        postBody['food_type'] = this.state.foodType;
        postBody['food_quantity'] = this.state.amount;
        postBody['location'] = this.state.location;
        postBody['duck_count'] = this.state.duckNumber;

        fetch(API_URL, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(postBody)
        })
        .then((resp) => console.log(resp))
        .catch((e) => { 
            alert("Request failed, please double-check your input.");
            console.log(e);
        });
    }



    render() {
        return <Layout>

                <h3>Duck Feeding</h3>
                
                <form onSubmit={this.handleSubmit}>
                    <FormControl>
                        <InputLabel>Time of Feeding</InputLabel>
                        <Input 
                            type="datetime-local"
                            name="time"
                            placeholder="" 
                            onChange={this.onChange}>
                        </Input>
                    </FormControl>
                    <br/>
                    
                    <FormControl>
                        <InputLabel>Number of ducks present</InputLabel>
                        <Input 
                            type="number" 
                            name="duckNumber"
                            onChange={this.onChange}>
                        </Input>
                    </FormControl>
                    <br/>
                    

                    <TextField 
                        name="location"
                        label="Location"
                        onChange={this.onChange}
                        />
                    <br/>
                    
                    <TextField 
                        name="food"
                        label="Food"
                        onChange={this.onChange}
                        />
                    <br/>

                    <TextField 
                        name="foodType"
                        label="Food Type"
                        onChange={this.onChange}
                        />
                    <br/>

                    <FormControl>
                        <InputLabel>Amount of food</InputLabel>
                        <Input 
                            type="text" 
                            name="amount"
                            onChange={this.onChange}>
                        </Input>
                    </FormControl>
                    <br/>
                    
                    <FormControl>
                        <Button color="primary" type="submit">Submit</Button>
                    </FormControl>
                    <br/>

                    <Button color="primary" onClick={this.putSessionInfo}>Send Req</Button>

                </form>

            </Layout>
    }

};
