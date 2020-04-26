import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const NavbarDiv = styled(Navbar)`
    
`;

const NavbarDogList = styled.div`
    
`;

const NavbarDog = styled.div`
    
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
            <NavbarDogList>
                {this.props.dogs.map(dog =>
                    <NavbarDog.Item
                        name={dog.name}
                        onClick={this.handleClick}
                    />
                )}
            </NavbarDogList>
        )
    }
    render() {
        return (
            <NavbarDiv>
                <NavbarDiv.Brand href="/">Ben</NavbarDiv.Brand>
                {this.listDogs()}
            </NavbarDiv>
        );
    }
}

export default withRouter(Navigation);