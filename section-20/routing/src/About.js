import React, { Component } from 'react';
import styled from 'styled-components';

const AboutDiv = styled.div`
  width: 1000px;
  height: 800px;
  background: white;
  border: 1px solid black;
  box-shadow: 20px 20px 0 black;
`;

class About extends Component {
    render() {
        return (
            <AboutDiv>
                <h1>About!!!</h1>
                <p>This is the about page...</p>
            </AboutDiv>
        );
    }
}

export default About;