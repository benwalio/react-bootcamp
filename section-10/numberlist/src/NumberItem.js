import React, { Component } from 'react';

class NumberItem extends Component {
    constructor (props) {
        super(props);
        // still have to bind functions, but don't need s state
        this.handleRemove = this.handleRemove.bind(this);
    }
    
    handleRemove (e) {
        this.props.remove(this.props.value)
    }

    render() {
        return (
            <li>
                {this.props.value}
                {/* add an internal click handler in order to be able to pass the props back to the parent */}
                <button onClick={this.handleRemove}>X</button>
            </li>
        );
    }
}

export default NumberItem;