import React, { Component } from 'react';

class Box extends Component {
    render() {
        let boxStyle = {
            backgroundColor: "blue",
            height: this.props.height,
            width: this.props.width
        }
        return (
            <div style={boxStyle}>
                
            </div>
        );
    }
}

export default Box;