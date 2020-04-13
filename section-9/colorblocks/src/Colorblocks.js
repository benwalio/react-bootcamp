import React, { Component } from 'react';
import Colorblock from './Colorblock';
import './Colorblocks.css';

class Colorblocks extends Component {
    static defaultProps = {
        numColors: 18
    }

    constructor(props) {
        super(props);
        this.state = {
            colors: Array.from({ length: this.props.numColors }).fill(this.retreiveRandColor()),
            prevColor: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.generateColors = this.generateColors.bind(this);
        this.retreiveRandColor = this.retreiveRandColor.bind(this);
    }

    retreiveRandColor (prevColor) {
        const colorArray = ["#69D2E7","#A7DBDB","#E0E4CC","#F38630","#FA6900","#588C73","#F2E394","#F2AE72","#D96459","#8C4646","#5E412F","#FCEBB6","#78C0A8","#F07818","#F0A830","#4298B5","#ADC4CC","#92B06A","#E19D29","#DD5F32","#260126","#59323C","#F2EEB3","#BFAF80","#8C6954","#F2671F","#C91B26","#9C0F5F","#60047A","#160A47"];

        let pickedColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        if (pickedColor === prevColor) {
            pickedColor = this.retreiveRandColor(prevColor);
        } else {
            return pickedColor;
        }
        
    }

    generateColors(e) {
        this.setState(st => ({
            colors: st.colors.map(n =>
                (
                   {color: this.retreiveRandColor(n.color), prevColor: n.color} 
                ))
        }))
    }

    handleClick(e) {
        this.generateColors();
    }

    render() {
        this.generateColors();
        
        return (
            <div className="Colorblock">
                <div className="Colors">
                    {this.state.colors.map( item => <Colorblock color={item.color} />)}
                </div>
                {/* {this.state.colors.map( item => <Colorblock color={item.color} />)} */}
                {/* {this.state.colors.map(c => console.log(c))} */}
                {/* <Colorblock /> */}
                <button onClick={this.handleClick}>generate colors</button>
            </div>
        );
    }
}

export default Colorblocks;