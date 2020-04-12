import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
<<<<<<< HEAD
    constructor (props) {
        super(props);
        this.state = {
            num: 0
        }
    }
=======
>>>>>>> dev-dice-7

    render() {
        const { num } = this.props;
        let iconClass = "fas fa-dice-";
        // this.setState({ num: this.state.props });
        function getStrFromNum (num) {
            let digits = ["hunter2", "one", "two", "three", "four", "five", "six"];
            return digits[num];
        }

        iconClass += getStrFromNum(num);

        return (
            <div className="Die">
<<<<<<< HEAD
                <i className={iconClass}></i>
=======
                <i className={`fas fa-dice-${this.props.num}`}></i>
>>>>>>> dev-dice-7
            </div>
        );
    }
}

export default Die;