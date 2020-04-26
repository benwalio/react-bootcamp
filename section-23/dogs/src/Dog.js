import React, { Component } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const DogCard = styled(Card)`
    width: 20rem;
    margin: auto;
    margin-top: 3rem;
    background-color: #c38d9e;
`;

const DogButton = styled(Button)`
    margin-top: 1rem;  
`;

class Dog extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.history.push("/dogs");
    }
    render() {
        const name = this.props.match.params.name;


        
        return (
            <Container>
                <DogCard>
                    <DogCard.Img variant="top" src={this.props.dog.src} />
                        <DogCard.Body>
                            <DogCard.Title>{this.props.dog.name}</DogCard.Title>
                            <DogCard.Subtitle className="mb-1 text-muted border-bottom text-right">age- {this.props.dog.age}</DogCard.Subtitle>
                            <ListGroup variant="flush">
                                {this.props.dog.facts.map(fact => 
                                    <ListGroup.Item>{fact}</ListGroup.Item>
                                )}
                            </ListGroup>
                            <DogButton variant="primary" onClick={this.handleClick}>go back</DogButton>
                        </DogCard.Body>
                    </DogCard>
            </Container>
        );
    }
}

export default Dog;