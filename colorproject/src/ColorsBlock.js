import React, { Component } from 'react';
// eslint-disable-next-line
import Grid from '@material-ui/core/Grid';
import styled from 'styled-jss';

const ColorSquareBox = styled(Grid)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: '1rem',
    height: '14rem',
    width: '100%'
})

const ColorSquare = styled(Grid)({
    width: '100%',
    height: '33%',
    margin: 0,
    padding: 0,
    backgroundColor: (props) => props.color
})

class ColorsBlock extends Component {

    renderColors() {
        return (
            <ColorSquareBox>
                {this.props.colors.map(color => 
                    <ColorSquare item xs={3} spacing={0} color={color}>

                    </ColorSquare>
                )}
            </ColorSquareBox>
        )
    }

    render() {
        return (
            <div>
                {this.renderColors()}
            </div>
        );
    }
}

export default ColorsBlock;