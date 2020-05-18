import React, { Component } from "react";
// eslint-disable-next-line
import Container from "@material-ui/core/Container";
// eslint-disable-next-line
import Grid from "@material-ui/core/Grid";
import styled from "styled-jss";
import ColorBox from "./ColorBox";

const PaletteDiv = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
});

const CommandDiv = styled(PaletteDiv)({
  flex: "1 0",
  backgroundColor: "blue",
});

const ColorsGrid = styled(PaletteDiv)({
  margin: 0,
  padding: 0,
  backgroundColor: "red",
  height: '90%'
});

const ColorGrid = styled('div')({
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  height: '80%',
  width: '100%'
});

const Color = styled(ColorGrid)({
  backgroundColor: (props) => props.color,
  height: "100px",
});

const TopDiv = styled(PaletteDiv)({
  backgroundColor: "yellow",
  height: "10%",
});

const BottomDiv = styled(PaletteDiv)({
  backgroundColor: "yellow",
  height: "10%",
});

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: this.props.colorPalette,
    };
    this.renderColors = this.renderColors.bind(this);
  }

  initialState() {
    return {
      colors: this.props.colorPalette,
    };
  }

  renderColors() {
    return (
      <ColorGrid item xs={12}>
        {this.state.colors.colors.map((color) => (
          <ColorBox
            name={this.state.colors.name}
            id={this.state.colors.id}
            color={color}
          ></ColorBox>
        ))}
      </ColorGrid>
    );
  }

  render() {
    return (
      <PaletteDiv container>
        <TopDiv item xs={12}></TopDiv>
        {/* <CommandDiv item xs={3}>
                <input type="text"/>
                </CommandDiv> */}
        {this.renderColors()}
        <BottomDiv item xs={12}></BottomDiv>
      </PaletteDiv>
    );
  }
}

export default Palette;
