import React, { Component } from 'react';
import Routes from './Routes';
import { v4 as uuid } from 'uuid';

class ColorsMiddle extends Component {
    static defaultProps = {
        colorCollections: [
            {
                id: uuid(),
                emoji: 'ok_hand',
                name: 'firetruck go froom',
                colors: [
                    '#eeba30',
                    '#d3a625',
                    '#000000',
                    '#e1f7d5',
                    '#ffbdbd',
                    '#c9c9ff',
                    '#f1cbff',
                    '#01cdfe',
                    '#05ffa1',
                    '#740001',
                    '#ae0001'
                ]
            },
            {
                id: uuid(),
                emoji: 'croissant',
                name: 'blu-monay',
                colors: [
                    '#eeba30',
                    '#d3a625',
                    '#000000',
                    '#e1f7d5',
                    '#ffbdbd',
                    '#c9c9ff',
                    '#f1cbff',
                    '#01cdfe',
                    '#05ffa1',
                    '#740001',
                    '#ae0001'
                ]
            },
            {
                id: uuid(),
                emoji: 'tulip',
                name: 'candlelight by the candlelight',
                colors: [
                    '#eeba30',
                    '#d3a625',
                    '#000000',
                    '#e1f7d5',
                    '#ffbdbd',
                    '#c9c9ff',
                    '#f1cbff',
                    '#01cdfe',
                    '#05ffa1',
                    '#740001',
                    '#ae0001'
                ]
            },
            {
                id: uuid(),
                emoji: 'turkey',
                name: 'puuuuuuurppp',
                colors: [
                    '#eeba30',
                    '#d3a625',
                    '#000000',
                    '#e1f7d5',
                    '#ffbdbd',
                    '#c9c9ff',
                    '#f1cbff',
                    '#01cdfe',
                    '#05ffa1',
                    '#740001',
                    '#ae0001'
                ]
            }
        ]
    }

    render() {
        return (
            <div>
                <Routes colorCollections={this.props.colorCollections} />
            </div>
        );
    }
}

export default ColorsMiddle;