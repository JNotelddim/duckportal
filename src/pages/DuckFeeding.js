import React, { Component } from 'react';
import { TextField, FormControl, InputLabel, Input, Button} from '@material-ui/core';

import Layout from '../comp/Layout.js';

//const API_URL = "http://127.0.0.1:8000/feedingSessions/"
const API_URL = "https://duckapp-jm.herokuapp.com/feedingSessions/" //TODO: refactor constants into config file
const DEFAULT_STATE = {
    time: "",
    duckNumber: 0,
    location: "",
    food: "",
    foodType: "",
    amount: ""
};

export default class DuckFeeding extends Component{

    constructor(props){
        super(props);
        this.state = DEFAULT_STATE;

        this.onChange= this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.putSessionInfo = this.putSessionInfo.bind(this);
    }

    onChange (event){
        this.state[event.target.name] = event.target.value;
    }
    
    clearState(){
        //this.setState(DEFAULT_STATE);
        //note, I'd like to just be clearing the state and having it refresh that way -- but I don't have it set up so the inputs' values will clear based on the state clearing -- and I'm out of time, so for now the form is just cleared by re-naviating. it's lame and hacky but it works.. 
        
        //also worth noting, it wouldn't be necessary if I was using a button of type="submit" .. but when I was using a "submit" button my POSTs were failing, and again, I didn't have time to fix that -- so I went for a regular button which would trigger the same request, and just manually clear it out.
        window.location.href = '/DuckFeeding';
    }
    
    handleSubmit(params){
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
        .then((resp) => {console.log(resp); this.clearState();})
        .catch((e) => { 
            alert("Request failed, please try again.");
            console.log(e);
        });
    }



    render() {
        return <Layout>

                <h3>Duck Feeding</h3>
                
                <form onSubmit={this.handleSubmit}>
                    <InputLabel>Time of Feeding</InputLabel>
                    <FormControl>
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
                            required
                            onChange={this.onChange}>
                        </Input>
                    </FormControl>
                    <br/>
                    

                    <TextField 
                        name="location"
                        label="Location"
                        required
                        onChange={this.onChange}
                        />
                    <br/>
                    
                    <TextField 
                        name="food"
                        label="Food"
                        required
                        onChange={this.onChange}
                        />
                    <br/>

                    <TextField 
                        name="foodType"
                        label="Food Type"
                        required
                        onChange={this.onChange}
                        />
                    <br/>

                    <FormControl>
                        <InputLabel>Amount of food</InputLabel>
                        <Input 
                            type="text" 
                            name="amount"
                            required
                            onChange={this.onChange}>
                        </Input>
                    </FormControl>
                    <br/>
                    
                    <br/>

                    <Button color="primary" onClick={this.putSessionInfo}>Submit</Button>

                </form>

            </Layout>
    }

};
