import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor (props) {
        super(props);
        this.state = {
            num: 0
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

    render() {
        const { num } = this.props;
        // this.setState({ num: this.state.props });

        return (
            <div className="Die">
                <i className={this.findIcon(num)}></i>
            </div>
        );
    }
}

export default Die;