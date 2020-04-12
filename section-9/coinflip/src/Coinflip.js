import React, { Component } from 'react';
import Coin from './Coin';

class Coinflip extends Component {
    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            flip: "heads",
            headsCount: 0,
            tailsCount: 0
        }
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin () {
        let state = this.state;
        console.log(state)

        let coinFlip = Math.round(Math.random());
        if (coinFlip) {
            state = {
                flip: "heads",
                headsCount: this.state.headsCount + 1,
                tailsCount: this.state.tailsCount
            }
        } else {
            state = {
                flip: "tails",
                headsCount: this.state.headsCount,
                tailsCount: this.state.tailsCount + 1
            }
        }
        console.log(state)

        this.setState(st => (
            {
                flip: state.flip,
                headsCount: state.headsCount,
                tailsCount: state.tailsCount
            }
        ))

    }

    render() {
        return (
            <div>
                <h1>lets flip a coin</h1>
                <Coin flip={this.state.flip} />
                <p>total flips: {this.state.headsCount + this.state.tailsCount}</p>
                <p>total heads: {this.state.headsCount} - total tails: {this.state.tailsCount}</p>
                <button onClick={this.flipCoin}>flip</button>
            </div>
        );
    }
}

export default Coinflip;