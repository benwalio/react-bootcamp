import React, { Component } from 'react';
import './Die.css';

class Die extends Component {

    render() {
        const { num } = this.props;
        // this.setState({ num: this.state.props });

        return (
            <div className="Die">
                <i className={`fas fa-dice-${this.props.num}`}></i>
            </div>
        );
    }
}

export default Die;