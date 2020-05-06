import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styled from 'styled-jss';

const ColorBoxColor = styled(Grid)({
    backgroundColor: (props) => props.color,
    height: '14rem',
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover .copy-button': {
        opacity: '1',
        transition: '0.5s'
    }
})

const ColorBoxColorClickText = styled(Button)({
    alignSelf: 'center',
    opacity: '0',
    // '&:hover': {
    //     opacity: '1'
    // }
})

const ColorBoxColorNameText = styled('span')({
    alignSelf: 'flex-end',
    flex: '0',
    padding: 1
})

const ColorBoxMore = styled(Button)({
    alignSelf: 'flex-end',
    padding: '0',
    margin: '0'
})

class ColorBox extends Component {
    render() {
        const color = this.props.color;

        return (
            <ColorBoxColor item xs={3} color={color.color}>
                <ColorBoxColorNameText>{color.name}</ColorBoxColorNameText>
                <ColorBoxColorClickText className='copy-button'>click me</ColorBoxColorClickText>
                <ColorBoxMore>more</ColorBoxMore>
            </ColorBoxColor>
        );
    }
}

export default ColorBox;