import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor (props) {
        super(props);
        this.state = this.initialState();
        this.handleClick = this.handleClick.bind(this);
    };
    
    initialState () {
        return ({
            count: 0
        })
    };

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <h1>counter butts press: {this.state.count}</h1>
                <button onClick={this.handleClick}>butts</button>
            </div>
        )
    }
}
