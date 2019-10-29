import React, { Component } from 'react';
import { TextField, FormControl, InputLabel, Input, Button} from '@material-ui/core';

import Layout from '../comp/Layout.js';

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
        //console.log(event.target.name);
        //console.log(event.target.value);
        this.state[event.target.name] = event.target.value;
        //console.log(this.state);
    }
    
    handleSubmit(params){
        alert(this.state);
        console.log(params);
    }

    putSessionInfo(){
        console.log(this.state);
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
