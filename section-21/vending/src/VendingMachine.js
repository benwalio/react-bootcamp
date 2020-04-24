import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const VendMachDiv = styled.div`
    
`;

const VendMachNav = styled.nav`
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: space-around;
`;

const VendMachItems = styled.div`
    
`;

const NavLink = styled(Link)`

`;

class VendingMachine extends Component {
    constructor (props) {
        super(props);
        this.state = initialState();
    };
    
    initialState () {
        return ({
            items: [
                {item: "cheetos", link: "Cheetos", id: uuid()},
                {item: "ice cream", link: "IceCream", id: uuid()},
                {item: "pretzels", link: "Pretzels", id: uuid()}
            ]
        })
    };


    renderItems() {

    }

    renderNav() {
        
    }

    render() {
        return (
            <VendMachDiv>
                <VendMachNav>
                    {this.renderNav()}
                </VendMachNav>
                <VendMachItems>
                    {this.renderItems()}
                </VendMachItems>
            </VendMachDiv>
        );
    }
}

export default VendingMachine;