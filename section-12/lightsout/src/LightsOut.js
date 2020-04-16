import React, { Component } from 'react';
import './LightsOut.css';
import Light from './Light';

class LightsOut extends Component {
    static defaultProps = {
        numRows: 5,
        numCols: 5,
        chanceStartLit: 0.25
    }

    constructor (props) {
        super(props);
        this.state = {
            hasWon: false,
            lights: this.fillStateLights(),
            filled: false
        };
        this.fillStateLights = this.fillStateLights.bind(this);
        this.lightClick = this.lightClick.bind(this);
    }

    fillStateLights () {
        // colt initialized empty arrays and did a push and it worked fine
        // not sure why my array init failed, but this one works
        let lightArray = [];

        for (let i = 0; i < this.props.numCols; i++) {
            let row = [];
            for (let j = 0; j < this.props.numRows; j++) {
                row.push(Math.random() < this.props.chanceStartLit);
            };
            lightArray.push(row);
        };
        return lightArray;
        
    }

    aroundLightClicked(row, col) {
        let lightArray = [...this.state.lights];
        if(row > 0) {
            lightArray[col][row - 1] = this.toggleLight(lightArray[col][row - 1]);
        };
        if(row < this.props.numRows - 1) {
            lightArray[col][row + 1] = this.toggleLight(lightArray[col][row + 1]);
        }
        if(col > 0) {
            lightArray[col - 1][row] = this.toggleLight(lightArray[col - 1][row]);
        }
        if(col < this.props.numCols - 1) {
            lightArray[col + 1][row] = this.toggleLight(lightArray[col + 1][row]);
        }
        let hasWon = lightArray.every(row => row.every(light => !light));
        this.setState({
            lights: lightArray,
            hasWon: hasWon
        })
    }

    toggleLight(light) {
        if(light) {
            return false;
        } else {
            return true;
        }
    }

    lightClick(row, col, lit) {
        let lightArray = [...this.state.lights];
        lightArray[col][row] = this.toggleLight(lit);
        this.aroundLightClicked(row, col);
        this.setState({
            lights: lightArray
        })
    }

    generateLights() {
        return this.state.lights.map((col, idxCol) => col.map((row, idxRow) => (
            <Light col={idxCol} row={idxRow} key={idxCol + "-" + idxRow}
            value={row}
            lightClick={this.lightClick}
            />
        )));
    }

    render() {
        if(this.state.hasWon) {
            return <h1>YOU WINNNAH</h1>
        }
        return (
            <div className="LightsOut">
                <h1>lights out</h1>
                <div className="LightsOut-Box">
                    {this.generateLights()}
                </div>
            </div>
        );
    }
}

export default LightsOut;