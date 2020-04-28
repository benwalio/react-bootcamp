import React, { Component } from 'react';
import ls from 'local-storage';
// eslint-disable-next-line
import Container from '@material-ui/core/Container';
// eslint-disable-next-line
import Card from '@material-ui/core/Card';
// eslint-disable-next-line
import Grid from '@material-ui/core/Grid';
// import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
// eslint-disable-next-line
import CardMedia from '@material-ui/core/CardMedia';
import { Emoji } from 'emoji-mart';
import styled from 'styled-jss';
import ColorsBlock from './ColorsBlock';

const ColorListContainer = styled(Container)({
    backgroundImage: 'url(./assets/img/background.jpg)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%'
});

const ColorListTitle = styled(Container)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
});

const ColorListColors = styled(Grid)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'auto'
});

const ColorCardDiv = styled(Grid)({

})

const ColorCard = styled(Card)({
    backgroundColor: 'white',
    textAlign: 'left',
    padding: '1rem 2rem',
    [`& span`] : {
        float: 'right'
    }
})

class ColorList extends Component {
    
    constructor(props) {
        super(props);
        // this.renderColorBoxes = this.renderColorBoxes.bind(this);
    }

    renderColorBoxes () {
        return (
            <ColorListColors container spacing={2}>
                {this.props.colorCollections.map(collection =>
                    <ColorCardDiv item xs={4} key={collection.id}>
                        <ColorCard>
                            <ColorsBlock history={this.props.history} colors={collection.colors} name={collection.name} id={collection.id} />
                            {collection.name}<Emoji emoji={collection.emoji} size={24} />
                        </ColorCard>
                    </ColorCardDiv>
                )}
            </ColorListColors>
        )
    }

    render() {
        // const classes = useStyles();

        return (
            <ColorListContainer>
                <ColorListTitle><h1>React Colors</h1><Emoji emoji='lower_left_paintbrush' size={24} /></ColorListTitle>
                {this.renderColorBoxes()}
            </ColorListContainer>
        );
    }
}

export default ColorList;