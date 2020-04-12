import React, { Component } from 'react';
import Colorblock from './Colorblock';

class Colorblocks extends Component {
    static defaultProps = {
        numColors: 18
    }

    render() {
        return (
            <div>
                <Colorblock />
            </div>
        );
    }
}

export default Colorblocks;