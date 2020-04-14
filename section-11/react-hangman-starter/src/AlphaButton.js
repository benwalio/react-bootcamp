import React, { Component } from 'react';

class AlphaButton extends Component {
    static defaultProps = {
        letters: "abcdefghijklmnopqrstuvwxyz".split("")
    }

    constructor (props) {
        super(props);
        this.state = {
            guessed: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleGuess();
    }
    
    render() {
        return (
            <div>
                <button disabled={this.props.disabled} onClick={this.handleClick}>{this.props.value}</button>
            </div>
        );
    }
}

export default AlphaButton;