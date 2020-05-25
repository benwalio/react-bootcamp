import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.renderDogs = this.renderDogs.bind(this);
    }

    renderDogs() {
        return (
            
        )
    }
    render() {
        return (
            <Navbar>
                <Navbar.Brand>ben</Navbar.Brand>
                
            </Navbar>
        );
    }
}

export default withRouter(Navigation);