import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

class DogList extends Component {

    renderDog() {
        return (
            <Row>
                {this.props.dogs.map(dog => 
                    <Col xs={6} md={4} className="mb-5">
                        <a href={`/dog/${dog.name}`}>
                            <Image src={dog.src} alt="" fluid roundedCircle />  
                        <Button className="mt-2 text-center" variant="primary">{dog.name}</Button></a>
                    </Col>
                )}
            </Row>
        )
    }
    render() {
        return (
            <Container>
                {this.renderDog()}
            </Container>
        );
    }
}

export default DogList;