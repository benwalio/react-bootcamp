import React, { Component } from 'react';
import './Coin.css'

class Coin extends Component {
    render() {
        let iconClass = "fas fa-";
        if (this.props.flip === "heads") {
            iconClass += "user"
        } else {
            iconClass += "crow"
        }
        return (
            <div className="Coin">
                <i className={iconClass}></i>
            </div>
        );
    }
}

export default Coin;