import React, { Component } from 'react';
// eslint-disable-next-line
import Container from '@material-ui/core/Container';
// eslint-disable-next-line
import Grid from '@material-ui/core/Grid';
import styled from 'styled-jss';

const PaletteDiv = styled(Container)({
    display: 'flex',
    flexDirection: 'row'
})

const CommandDiv = styled(Container)({
    backgroundColor: 'blue'
})

const ColorsGrid = styled(Grid)({
    backgroundColor: 'red'
})

class Palette extends Component {
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