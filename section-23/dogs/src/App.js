import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Routes from './Routes';
import Navigation from './Navigation';
import whiskey from "./imgs/whiskey.jpg";
import tubby from "./imgs/tubby.jpg";
import hazel from "./imgs/hazel.jpg";

const AppDiv = styled.div`
  background-color: #4abdac;
  color: #85dcb0;
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
      },
      {
        name: "Sbuubbby",
        age: 4,
        src: tubby,
        facts: [
          "Sbuubbby is not the brightest dog",
          "Sbuubbby does not like walks or exercise.",
          "Sbuubbby loves eating food."
        ]
      }
    ]
  };

  renderNav() {
    return (
      <Navigation
        dogs={this.props.dogs}
      />
    )
  }

  // renderDogs() {
  //   return (
  //     <AppDogsDiv>
  //       {this.props.dogs.map(dog =>
  //         <AppDogDiv 
  //           name={dog.name}
  //           age={dog.age}
  //           imgSrc={dog.src}
  //           facts={dog.facts}
  //         />
  //       )}
  //     </AppDogsDiv>
  //   )
  // }
  render() {
    return (
      <AppDiv>
        {this.renderNav()}
        {/* {this.renderDogs()} */}
        <Routes dogs={this.props.dogs} />
      </AppDiv>
    );
  }
}

export default App;
