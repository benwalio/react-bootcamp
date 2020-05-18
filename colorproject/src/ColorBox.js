import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styled from "styled-jss";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorBoxColor = styled('div')({
  backgroundColor: (props) => props.color,
  height: "34%",
  width: '20%',
  display: "inline-block",
  position: 'relative',
  cursor: 'pointer',
  "&:hover .copy-button": {
    opacity: "1",
    transition: "0.5s",
  },
  "& .show": {
    opacity: 1,
    transform: 'scale(30)',
    zIndex: '5',
    position: 'absolute'
  }
});

const ColorBoxColorClickText = styled(Button)({
  width: "100px",
  position: "absolute",
  display: "inline-block",
  top: "50%",
  left: "50%",
  marginLeft: "-50px",
  marginTop: "-15px",
  textAlign: "center",
  outline: "none",
  background: "rgba(255, 255, 255, 0.3)",
  fontSize: "1rem",
  lineHeight: "30px",
  textTransform: "uppercase",
  border: "none",
  textDecoration: "none",
  opacity: 0
});

const ColorBoxColorNameText = styled("span")({
  position: "absolute",
  width: "100%",
  left: "0px",
  bottom: "0px",
  paddingBottom: ".2rem",
  color: "black",
  letterSpacing: "1px",
  textTransform: "uppercase",
  fontSize: "12px"
});

const ColorBoxMore = styled(Button)({
  background: "rgba(255, 255, 255, 0.3)",
  position: "absolute",
  border: "none",
  right: "0px",
  bottom: "0px",
  width: "60px",
  height: "30px",
  textAlign: "center",
  lineHeight: "30px",
  textTransform: "uppercase"
});

const CopyOverlayDiv = styled('div')({
  opacity: 0,
  backgroundColor: (props) => props.color,
  zIndex: 0,
  width: '100%',
  height: '100%',
  transition: 'transform 0.6s ease-in-out',
  transform: 'scale(0.1)',
  textAlign: 'center',
})

const CopyOverlayMsg = styled('div')({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  fontSize: '4rem',
  transform: 'scale(0.1)',
  transformDelay: '0.6s',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& h1': {
    width: '100%',
    fontWeight: 400,
    textShadow: [[1, 2, 'black']],
    background: 'rgba(255, 255, 255, 0.2)'
  },
  '& p': {
    fontSize: '2rem',
    fontWeight: 200, 
    textShadow: [[1, 2, 'black']],
  }
})

class ColorBox extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       copying: false
    }
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({
      copying: true
    }, () => setTimeout(() => {
      this.setState({
        copying: false
      })
    }, 1500)
    )
  }
  
  render() {
    const color = this.props.color;

    return (
      <CopyToClipboard text={color.color} onCopy={this.changeCopyState}>
        <ColorBoxColor item xs={3} color={color.color}>
          <CopyOverlayDiv color={color.color} className={`${this.state.copying && 'show'}`}> 
            <CopyOverlayMsg>
              <h1>copied</h1>
              <p>{color.color}</p>
            </CopyOverlayMsg>
          </CopyOverlayDiv>
          <ColorBoxColorNameText>{color.name}</ColorBoxColorNameText>
          <ColorBoxColorClickText className="copy-button">
            click me
          </ColorBoxColorClickText>
          <ColorBoxMore>more</ColorBoxMore>
        </ColorBoxColor>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
