import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const NavbarDiv = styled(Navbar)`
    
`;

const NavbarDogList = styled(Navbar)`
    
`;

const NavbarDog = styled(Nav)`
    
`;



class Navigation extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        this.props.history.push("/dog/" + e.target.name)
    }

    listDogs() {
        return (
            <NavbarDogList.Collapse className="mr-auto">
                {this.props.dogs.map(dog =>
                    <NavbarDog.Link
                        key={dog.name}
                        name={dog.name}
                        onClick={this.handleClick}
                    >{dog.name}</NavbarDog.Link>
                )}
            </NavbarDogList.Collapse>
        )
    }

    render() {
        return (
            <NavbarDiv bg="dark" variant="dark">
                <NavbarDiv.Brand href="/">Ben</NavbarDiv.Brand>
                {this.listDogs()}
            </NavbarDiv>
        );
    }
}

export default withRouter(Navigation);