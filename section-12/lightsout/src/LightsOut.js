import React, { Component } from 'react';
import './LightsOut.css';
import Light from './Light';

class LightsOut extends Component {
    static defaultProps = {
        startLit: 5,
        squareSize: 5
    }

    constructor (props) {
        super(props);
        this.state = {
            lights: Array.from({length: this.props.squareSize}).fill(Array.from({length: this.props.squareSize}).fill(0)),
            filled: false
        };
        this.fillRandomLights = this.fillRandomLights.bind(this);
    }

    fillRandomLights () {
        // let numLights = 0;
        let lightArray = [...this.state.lights];
        // lightArray.map(arr => arr.map().fill(0));
        for (let i = 0; i < lightArray.length; i++) {
            for (let j = 0; j < lightArray[i].length; j++) {
                if(Math.ceil(Math.random() * 4) === 4) {
                    // 1 of 4 get lit
                    lightArray[i][j] = 1;
                }
            }
        }
        this.setState({
            lights: lightArray,
            filled: true
        });
        console.log(lightArray);
    }

    startGame () {
        this.fillRandomLights();
        return this.generateLights();
    }

    generateLights() {
        // if(!this.state.filled) {
        //     this.fillRandomLights ();
        // }
        let lightArray = [];
        return this.state.lights.map((col, idxCol) => col.map((lt, idxLt) => (
            <Light col={col} lt={lt} iC={idxCol} iL={idxLt}
            value={Math.ceil(Math.random() * 4) === 4 ? 1 : 0}
            />
        ), (col) => lightArray.push(col)));
    }

    render() {
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