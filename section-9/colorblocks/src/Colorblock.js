import React, { Component } from 'react';
import './Colorblock.css';

class Colorblock extends Component {
    render() {
        let divStyle = {
            backgroundColor: this.props.color
        }

        return (
            <div style={divStyle} className="Colorblock" onClick={this.props.updateColor.bind(this, this.props.colorIndex)}>
            {/* <div style={divStyle} className="Colorblock" onClick={() => this.props.updateColor(his.props.colorIndex)}> 
                Also works, my initial find. both options bind to a new function and create a new function */}

                {/* <div className="ColorblockColor" onClick={this.generateColor(this.props.color)}>

                </div> */}
            </div>
        );
    }
}

export default Colorblock;