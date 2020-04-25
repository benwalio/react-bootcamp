import React, { Component } from 'react';
import styled from 'styled-components';

const DrinkDiv = styled.div`
    width: 40%;
    height: 50%;
    margin: auto;
`;

class Drink extends Component {
    render() {
        const name = this.props.match.params.drinkName;
        const url = `https://source.unsplash.com/400x300/?${name}`

        return (
            <DrinkDiv>
                <h1>{name}</h1>
                <img src={url} alt=""/>
            </DrinkDiv>
        );
    }
}

export default Drink;