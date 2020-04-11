import React, { Component } from 'react';

class Click extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            num: 0,
            randNum: 1
        }
        this.handleClick = this.handleClick.bind(this);
        this.randomCheck = this.randomCheck.bind(this);
    }

    handleClick (e) {
        this.setState({ clicked: true, num: this.state.num + 1});
    }

    randomCheck (e) {
        let random = Math.floor(Math.random() * 8) + 1;
        this.setState({ randNum: random});
    }

    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'kool beans' : 'clik butt'} {this.state.num > 0 ? `${this.state.num}` : null}</h1>
                <button onClick={this.handleClick}>clik me</button>
                <h2>Number is: {this.state.randNum}</h2>
                { this.state.randNum !== 7 ? <button onClick={this.randomCheck}>clik again</button> : <h1>you win!</h1>}
            </div>
        );
    }
}

export default Click;