import React, { Component } from 'react';
import './Light.css';

class Light extends Component {
    constructor (props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        // do something
        this.props.lightClick(this.props.row, this.props.col, this.props.value)
    }

    render() {
        let btnClass = this.props.value ? 'Lit' : 'Dead';
        return (
            <div className="Light">
                <div className={btnClass} onClick={this.handleClick}></div>
            </div>
        );
    }
}

export default Light;