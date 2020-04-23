import React, { Component } from 'react';
import styled from 'styled-components';

const ContactDiv = styled.div`
  width: 1000px;
  height: 800px;
  background: white;
  border: 1px solid black;
  box-shadow: 20px 20px 0 black;
`;

class Contact extends Component {
    render() {
        return (
            <ContactDiv>
                <h1>Contact!!!</h1>
                <p>PLEASE DO NOT CONTACT US EVER</p>
            </ContactDiv>
        );
    }
}

export default Contact;