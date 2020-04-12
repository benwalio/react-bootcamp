import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

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
        this.setState({ rolling: true });
        setTimeout(() => {
            this.setState({
                rolling: false,
                dieOne: Math.ceil(Math.random() * 6),
                dieTwo: Math.ceil(Math.random() * 6)
            })
        }, 1500);
    }

    render() {
        let btnClass = "ui massive";
        let dieClass = "column center aligned";

        if (this.state.rolling) {
            btnClass += " loading disabled button";
            dieClass += " RollDiceShakey"
        } else {
            btnClass += " green button";
        }

        return (
            <div className="RollDice">
                <div className="ui two column centered grid">
                    <div className="column"></div>
                    <div className="four column centered row">
                        <div className={dieClass}><Die num={this.state.dieOne} /></div>
                        <div className={dieClass}><Die num={this.state.dieTwo} /></div>
                    </div>
                
                </div>

                <button className={btnClass} onClick={this.rollDie}>roll dice</button>
                {/* "ui massive green button" */}
            </div>
        )
    }
}

export default RollDice;