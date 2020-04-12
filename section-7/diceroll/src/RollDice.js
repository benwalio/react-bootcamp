import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    constructor (props) {
        super(props);
        this.state = {
            dieOne: 1,
            dieTwo: 2,
            rolling: false
        }
        this.rollDie = this.rollDie.bind(this);
    }

    rollDie (e) {
        this.setState(
            {
                dieOne: Math.ceil(Math.random() * 6),
                dieTwo: Math.ceil(Math.random() * 6)
            }
        );
    }

    render() {
        return (
            <div className="RollDice">
                <Die num={this.state.dieOne} />
                <Die num={this.state.dieTwo} />

                <button onClick={this.rollDie}>roll dice</button>
            </div>
        );
    }
}

export default RollDice;