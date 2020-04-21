import React, { Component } from 'react';

class Joke extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.content}</h1>
            </div>
        );
    }
}

export default Joke;