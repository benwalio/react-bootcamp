import React, { Component } from 'react';
import styled from 'styled-components';

// let tilt = Math.ceil(Math.random() * 35);

const CardDiv = styled.div`
    width: 30%;

    img {
        height: auto;
        margin-left: auto;
        margin-right: auto;
        position: absolute;
        transform: rotate(${props => props.tilt}deg)
            translate(${props => props.shift[0]}px, ${props => props.shift[1]}px);
    }
`;

class Card extends Component {
    
    render() {
        let altText = this.props.face + " of " + this.props.suit;
        return (
            <CardDiv shift={this.props.shift} tilt={this.props.tilt}>
                <img src={this.props.image} alt={altText} />
            </CardDiv>
        );
    }
}

export default Card;