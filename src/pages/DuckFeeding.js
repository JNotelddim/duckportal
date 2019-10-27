import React, { Component } from 'react';

import Layout from '../comp/Layout.js';
import FormInput from '../comp/FormInput';

export default class DuckFeeding extends Component{
    
    render() {
        return <div>
            <Layout>
                <p>This is the duck-feeding page.</p>
                
                <form>
                    <FormInput label="Location" type="text"></FormInput>
                    
                </form>

            </Layout>
        </div>
    }

};
