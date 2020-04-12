import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    constructor (props) {
        super(props);
        this.state = {

            dieOne: 1,
            dieTwo: 2
        }
    }

    render() {
        return (
            <div className="RollDice">
                <Die num={this.state.dieOne} />
                <Die num={this.state.dieTwo} />

                <button>roll dice</button>
            </div>
        );
    }
}

export default RollDice;