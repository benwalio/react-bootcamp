import React, { Component } from 'react';

class AlphaButton extends Component {
    static defaultProps = {
        letters: "abcdefghijklmnopqrstuvwxyz".split("")
    }

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.btnClass += " clicked";
        this.props.handleGuess();
    }
    
    render() {
        let btnClass = "AlphaButton";
        return (
            <div>
                <button className={btnClass} onClick={this.handleClick}>{this.props.value}</button>
            </div>
        );
    }
}

export default AlphaButton;