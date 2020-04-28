import React, { Component } from 'react';
// eslint-disable-next-line
import Container from '@material-ui/core/Container';
// eslint-disable-next-line
import Grid from '@material-ui/core/Grid';
import styled from 'styled-jss';

const PaletteDiv = styled(Container)({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    margin: 0,
    padding: '1rem',
    height: '400px',
    width: '400px'
})

const CommandDiv = styled(Container)({
    width: '100%',
    height: '100%',
    backgroundColor: 'blue'
})

const ColorsGrid = styled(Grid)({
    width: '100%',
    height: '100%',
    backgroundColor: 'red'
})

class Palette extends Component {
    constructor (props) {
        super(props);
        this.state = this.initialState();
    };
    
    initialState () {
        return ({
            colors: this.props.colorPalette
        })
    };
    render() {
        return (
            <PaletteDiv>
                <CommandDiv xs={3}>

                </CommandDiv>
                <ColorsGrid xs={9}>

                </ColorsGrid>
            </PaletteDiv>
        );
    }
}

export default Palette;