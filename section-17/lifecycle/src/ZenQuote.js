import React, { Component } from 'react';
import axios from 'axios';

class ZenQuote extends Component {
    constructor (props) {
        super(props);
        this.state = initialState();
    };
    
    initialState () {
        return ({
            quote = ""
        })
    };

    componentDidMount() {
        axios.get("https://api.github.com/zen").then( response =>{
            console.log(response);
        })

    }

    render() {
        return (
            <div>
                <h1>always remember...</h1>
                {/* <p>{this.state.quote}</p> */}
            </div>
        );
    }
}

export default ZenQuote;