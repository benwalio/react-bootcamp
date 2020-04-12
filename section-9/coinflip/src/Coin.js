import React, { Component } from 'react';

class Coin extends Component {
    render() {
        let iconClass = "fas fa-";
        if (this.props.flip === "heads") {
            iconClass += "user"
        } else {
            iconClass += "crow"
        }
        return (
            <div>
                <i class={iconClass}></i>
            </div>
        );
    }
}

export default Coin;