import React, { Component } from 'react';

class Kills extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0
        }
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }

    // singleKill() {
    //     this.setState({ score: this.state.score + 1});
    // } // refactoring this as well to use my function

    // have to do a function callback to update more than 1 state change
    // state changes in a line only apply the FINAL change to the same
    // state in the same React code 'run'

    // tripleKill() {
    //     // add in a callback function to setState 
    //     // 'st' is normal var for the 'state' in callbacks
    //     this.setState(st => {return {score: st.score + 1};});
    //     this.setState(st => {return {score: st.score + 1};});
    //     this.setState(st => {return {score: st.score + 1};});
    // } // refactoring to abstract the functions, better for redux

    incrementScore (num) {
        return {score: this.state.score + num};
    }

    singleKill() {
        this.setState( this.incrementScore(1));
    }

    tripleKill() {
        this.setState(this.incrementScore(3));
        // this.setState(this.incrementScore);
        // this.setState(this.incrementScore);
    }

    render() {
        return (
            <div className="Kills">
                <h1>total kills: {this.state.score}</h1>
                <button onClick={this.singleKill}>single kill</button>
                <button onClick={this.tripleKill}>triple kill</button>
            </div>
        );
    }
}

export default Kills;