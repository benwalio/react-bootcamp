import React, { Component } from 'react';
import Coin from './Coin';

class Coinflip extends Component {
    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            flip: "heads"
        }
    }
    render() {
        return (
            <div>
                <Coin flip={this.state.flip} />
                <button onClick={flipCoin}>flip</button>
            </div>
        );
    }
}

export default Coinflip;