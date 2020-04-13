import React, { Component } from 'react';
import './Colorblock.css';

class Colorblock extends Component {
    render() {
        let divStyle = {
            backgroundColor: this.props.color
        }

        return (
            <div style={divStyle} className="Colorblock" onClick={() => this.props.updateColor(this.props.colorIndex)}>
                {/* <div className="ColorblockColor" onClick={this.generateColor(this.props.color)}>

                </div> */}
            </div>
        );
    }
}

export default Colorblock;