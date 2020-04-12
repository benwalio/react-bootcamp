import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor (props) {
        super (props);
        this.state = {
            num: this.props.num,
            digit: ['hunter2', 'one', 'two', 'three', 'four', 'five', 'six'],
            icon: "fas fa-dice-"
        }
    }

    findIcon = (num) => {
        switch (num) {
            case 1:
                return "fas fa-dice-one";
            case 2:
                return "fas fa-dice-two";
            case 3:
                return "fas fa-dice-three";
            case 4:
                return "fas fa-dice-four";
            case 5:
                return "fas fa-dice-five";
            case 6:
                return "fas fa-dice-six";
            default:
                return "fas fa-cheese";
        }
    }

    findIcon2 = () => {
        let digit = ['hunter2', 'one', 'two', 'three', 'four', 'five', 'six']
        this.setState( { icon: this.state.icon + digit[this.state.num]})
    }

    render() {
    // const digit = ['hunter2', 'one', 'two', 'three', 'four', 'five', 'six'];
    // const icon = "fas fa-dice-" + digit[this.state.num];

        return (
            <div className="Die">
                <i className={this.findIcon2}></i>
                <h2>{this.state.num}</h2>
            </div>
        )
    };
};

export default Die;