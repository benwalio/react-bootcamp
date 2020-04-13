import React, { Component } from 'react';
import './Colorblock.css';

class Colorblock extends Component {
    render() {
        let divStyle = {
            backgroundColor: this.props.color
        }

        return (
            <div style={divStyle} className="Colorblock">
                <div className="ColorblockColor">

                </div>
            </div>
        );
    }
}

export default Colorblock;