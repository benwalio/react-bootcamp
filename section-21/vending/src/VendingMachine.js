import React, { Component } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const VendMachDiv = styled.div`
    margin: 0 auto;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content:center;
`;

const VendMachItems = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

const VendItem = styled.a`
    color: teal;
`;

class VendingMachine extends Component {
    constructor (props) {
        super(props);
        this.state = this.initialState();
    };
    
    initialState () {
        return ({
            items: [
                {item: "cheetos", link: "cheetos", id: uuid()},
                {item: "ice cream", link: "ice-cream", id: uuid()},
                {item: "pretzels", link: "pretzels", id: uuid()}
            ]
        })
    };


    renderItems() {
        return (
            <VendMachItems>
                {this.state.items.map(item => 
                    <VendItem 
                        key={item.id}
                        item={item.item}
                        href={item.link}
                    >
                        {item.item}
                    </VendItem>
                )}
            </VendMachItems>
        )
    }

    render() {
        return (
            <VendMachDiv>
                    {this.renderItems()}
            </VendMachDiv>
        );
    }
}

export default VendingMachine;