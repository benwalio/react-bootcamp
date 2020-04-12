import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor (props) {
        super(props);
        this.state = {
            num: 0
        }
    }

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
                <i className={iconClass}></i>
            </div>
        );
    }
}

export default Die;