import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';

class ZenQuote extends Component {
    constructor (props) {
        super(props);
        this.state = this.initialState();
        this.componentDidMount = this.componentDidMount.bind(this);
    };
    
    initialState () {
        return ({
            quote: "",
            isLoaded: false
        })
    };

    componentDidMount() {
        axios.get("https://api.github.com/zen").then( response => {
            this.setState({
                quote: response.data,
                isLoaded: true
            });
        })

    }

    render() {
        return (
            <div>
                { this.state.isLoaded ? (
                    <div>
                        <h1>always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                ) : (
                    <div class="loader">
                        <div class="loader-inner">
                            <div class="loader-line-wrap">
                                <div class="loader-line"></div>
                            </div>
                            <div class="loader-line-wrap">
                                <div class="loader-line"></div>
                            </div>
                            <div class="loader-line-wrap">
                                <div class="loader-line"></div>
                            </div>
                            <div class="loader-line-wrap">
                                <div class="loader-line"></div>
                            </div>
                            <div class="loader-line-wrap">
                                <div class="loader-line"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ZenQuote;