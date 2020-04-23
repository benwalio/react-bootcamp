import React, { Component } from 'react';
import styled from 'styled-components';

const DogDiv = styled.div`
  width: 1000px;
  height: 800px;
  background: white;
  border: 1px solid black;
  box-shadow: 20px 20px 0 black;
`;

const DogImg = styled.img`
    width: 30%;
`;

class Dog extends Component {
    render() {
        return (
            <DogDiv>
                <h1>Dog!!!</h1>
                <h3>This dog is named: fido</h3>
                <DogImg src='https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1320&q=80' alt='pug dog' />
            </DogDiv>
        );
    }
}

export default Dog;