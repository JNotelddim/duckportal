import React, { Component } from 'react';

export default class FormInput extends Component{

    constructor(props){
        super(props);
        this.label = props.label;
        this.type = props.type;
        this.required = props.required;
    }

    render() {
        return <div>
            <label>
                {this.label}
                {this.getComponentByType(this.type)}
            </label>
        </div>
    }

    getComponentByType(type){
        switch(type){
            case "number":
                return <input type="number" />;
            case "text":
            default:
                return <input type="text" />;
        }
    }
}
