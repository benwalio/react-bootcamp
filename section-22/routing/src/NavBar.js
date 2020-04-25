import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const NavBarDiv = styled.div`
    display: flex;
    background-color: darkslategray;
    justify-content: flex-end;
    padding: 1rem;
    margin: auto;
`;

class NavBar extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        console.log(e.target);
        if (e.target.name === "login"){
            this.props.history.push("/food/salmon");
        } else if (e.target.name === "back") {
            this.props.history.goBack();
        }
    };

    render() {
        return (
            <NavBarDiv>
                <button name="back" onClick={this.handleClick}>back</button>
                <button name="login" onClick={this.handleClick}>login</button>
            </NavBarDiv>
        );
    }
}

export default withRouter(NavBar);