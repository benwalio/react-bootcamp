import React, { Component } from 'react';

const colors = [
    "#d1603d",
    "#ddb967",
    "#4f3824",
    "#d0e37f",
    "#221d23",
    "#426b69",
    "#222e50"
];

class Box extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    randomColor() {
        return (
            colors[Math.floor(Math.random() * colors.length)]
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.removeBox(this.props.id);
    }
    
    render() {
        let boxStyle = {
            backgroundColor: this.randomColor(),
            height: this.props.height,
            width: this.props.width,
            margin: "auto"
        }
        return (
            <div>
                <div style={boxStyle}></div>
                <form onSubmit={this.handleSubmit}>
                    <button>remove box</button>
                </form>
            </div>
        );
    }
}

export default Box;