import React, { Component } from 'react';
import { TextField, FormControl, InputLabel, Input } from '@material-ui/core';

import Layout from '../comp/Layout.js';

export default class DuckFeeding extends Component{
    
    handleSubmit(params){
        alert(params);
    }

    render() {
        return <div>
            <Layout>
                <p>This is the duck-feeding page.</p>
                
                <form onsubmit={this.handleSubmit}>
                    <FormControl>
                        <InputLabel>Time of Feeding</InputLabel>
                        <Input type="datetime-local" placeholder=""></Input>
                    </FormControl>
                    <br/>
                    
                    <FormControl>
                        <InputLabel>Number of ducks present</InputLabel>
                        <Input type="number"></Input>
                    </FormControl>
                    <br/>
                    

                    <TextField 
                        id="standard-location"
                        label="Location"
                        />
                    <br/>
                    
                    <TextField 
                        id="standard-food"
                        label="Food"
                        />
                    <br/>

                    <TextField 
                        id="standard-food-type"
                        label="Food Type"
                        />
                    <br/>

                    <FormControl>
                        <InputLabel>Amount of food</InputLabel>
                        <Input type="text"></Input>
                    </FormControl>
                    <br/>
                    
                </form>

            </Layout>
        </div>
    }

};
