import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const FoodDiv = styled.div`
    width: 40%;
    height: 50%;
    margin: auto;
`;

class Food extends Component {
    render() {
        const name = this.props.match.params.name;
        if (/\d/.test(name)) this.props.history.push("/notfound");
        const url = `https://source.unsplash.com/400x300/?${name}`;

        return (
            <FoodDiv>
                {/\d/.test(name) ? 
                    <Redirect to="/notfound" /> : 
                    <div>
                        <h1>{name}</h1>
                        <img src={url} alt=""/>
                    </div> }
            </FoodDiv>
        );
    }
}

export default Food;