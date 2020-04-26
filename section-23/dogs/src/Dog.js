import React, { Component } from 'react';
import styled from 'styled-components';

const DogDiv = styled.div`
    
`;

class Dog extends Component {
    render() {
        return (
            <DogDiv>
                <h1>{this.props.name}</h1>
                <p>{this.props.age} - {this.props.facts}</p>
            </DogDiv>
        );
    }
}

export default Dog;