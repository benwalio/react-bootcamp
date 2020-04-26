import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Dog from './Dog';
import Navigation from './Navigation';
import whiskey from "./imgs/whiskey.jpg";
import tubby from "./imgs/tubby.jpg";
import hazel from "./imgs/hazel.jpg";

const AppDiv = styled.div`
  
`;

const AppDogsDiv = styled.div`
  
`;

const AppDogDiv = styled(Dog)`
  
`;

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };

  renderNav( {
    return (
      <Navigation>
        {this.props.dogs.map(dog => 
          
        )}
      </Navigation>
    )
  })

  renderDogs() {
    return (
      <AppDogsDiv>
        {this.props.dogs.map(dog =>
          <AppDogDiv 
            name={dog.name}
            age={dog.age}
            imgSrc={dog.src}
            facts={dog.facts}
          />
        )}
      </AppDogsDiv>
    )
  }
  render() {
    return (
      <AppDiv>
        {this.renderNav()}
        {this.renderDogs()}
      </AppDiv>
    );
  }
}

export default App;
