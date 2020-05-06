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
                    {color: '#eeba30', name: 'puuuuuce', id: uuid()},
                    {color: '#d3a625', name: 'puuuuuce', id: uuid()},
                    {color: '#000000', name: 'puuuuuce', id: uuid()},
                    {color: '#e1f7d5', name: 'puuuuuce', id: uuid()},
                    {color: '#ffbdbd', name: 'puuuuuce', id: uuid()},
                    {color: '#c9c9ff', name: 'puuuuuce', id: uuid()},
                    {color: '#f1cbff', name: 'puuuuuce', id: uuid()},
                    {color: '#01cdfe', name: 'puuuuuce', id: uuid()},
                    {color: '#05ffa1', name: 'puuuuuce', id: uuid()},
                    {color: '#740001', name: 'puuuuuce', id: uuid()},
                    {color: '#ae0001', name: 'puuuuuce', id: uuid()}
                ]
            },
            {
                id: uuid(),
                emoji: 'croissant',
                name: 'blu-monay',
                colors: [
                    {color: '#eeba30', name: 'puuuuuce', id: uuid()},
                    {color: '#d3a625', name: 'puuuuuce', id: uuid()},
                    {color: '#000000', name: 'puuuuuce', id: uuid()},
                    {color: '#e1f7d5', name: 'puuuuuce', id: uuid()},
                    {color: '#ffbdbd', name: 'puuuuuce', id: uuid()},
                    {color: '#c9c9ff', name: 'puuuuuce', id: uuid()},
                    {color: '#f1cbff', name: 'puuuuuce', id: uuid()},
                    {color: '#01cdfe', name: 'puuuuuce', id: uuid()},
                    {color: '#05ffa1', name: 'puuuuuce', id: uuid()},
                    {color: '#740001', name: 'puuuuuce', id: uuid()},
                    {color: '#ae0001', name: 'puuuuuce', id: uuid()}
                ]
            },
            {
                id: uuid(),
                emoji: 'tulip',
                name: 'candlelight by the candlelight',
                colors: [
                    {color: '#eeba30', name: 'puuuuuce', id: uuid()},
                    {color: '#d3a625', name: 'puuuuuce', id: uuid()},
                    {color: '#000000', name: 'puuuuuce', id: uuid()},
                    {color: '#e1f7d5', name: 'puuuuuce', id: uuid()},
                    {color: '#ffbdbd', name: 'puuuuuce', id: uuid()},
                    {color: '#c9c9ff', name: 'puuuuuce', id: uuid()},
                    {color: '#f1cbff', name: 'puuuuuce', id: uuid()},
                    {color: '#01cdfe', name: 'puuuuuce', id: uuid()},
                    {color: '#05ffa1', name: 'puuuuuce', id: uuid()},
                    {color: '#740001', name: 'puuuuuce', id: uuid()},
                    {color: '#ae0001', name: 'puuuuuce', id: uuid()}
                ]
            },
            {
                id: uuid(),
                emoji: 'turkey',
                name: 'puuuuuuurppp',
                colors: [
                    {color: '#eeba30', name: 'puuuuuce', id: uuid()},
                    {color: '#d3a625', name: 'puuuuuce', id: uuid()},
                    {color: '#000000', name: 'puuuuuce', id: uuid()},
                    {color: '#e1f7d5', name: 'puuuuuce', id: uuid()},
                    {color: '#ffbdbd', name: 'puuuuuce', id: uuid()},
                    {color: '#c9c9ff', name: 'puuuuuce', id: uuid()},
                    {color: '#f1cbff', name: 'puuuuuce', id: uuid()},
                    {color: '#01cdfe', name: 'puuuuuce', id: uuid()},
                    {color: '#05ffa1', name: 'puuuuuce', id: uuid()},
                    {color: '#740001', name: 'puuuuuce', id: uuid()},
                    {color: '#ae0001', name: 'puuuuuce', id: uuid()}
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