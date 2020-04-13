import React, { Component } from 'react';
import Colorblock from './Colorblock';
import './Colorblocks.css';

class Colorblocks extends Component {
    static defaultProps = {
        numColors: 18,
        colorArray: ["#69D2E7","#A7DBDB","#E0E4CC","#F38630","#FA6900","#588C73","#F2E394","#F2AE72","#D96459","#8C4646","#5E412F","#FCEBB6","#78C0A8","#F07818","#F0A830","#4298B5","#ADC4CC","#92B06A","#E19D29","#DD5F32","#260126","#59323C","#F2EEB3","#BFAF80","#8C6954","#F2671F","#C91B26","#9C0F5F","#60047A","#160A47"]
    }

    constructor(props) {
        super(props);
        this.state = {
            colors: Array.from({ length: this.props.numColors } ).fill().map( () => { return {color: this.props.colorArray[Math.floor(Math.random() * this.props.colorArray.length)]}})
        }
        this.handleClick = this.handleClick.bind(this);
        this.generateColors = this.generateColors.bind(this);
        this.retreiveRandColor = this.retreiveRandColor.bind(this);
        this.generateColor = this.generateColor.bind(this);
    }

    retreiveRandColor (prevColor) {
        let pickedColor = this.props.colorArray[Math.floor(Math.random() * this.props.colorArray.length)];
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

    generateColor (colorIndex) {
        // this function is passed down to the individual blocks and then calledback on click
        // huge PITA - but basically, i also pass down the index. then, when i click a color it 
        // arrows the function back here with that index. We then go and find the obj
        // in the color array, change it, and set that state - causing the square to update
        // this took me hours and hours. ugh.
        console.log(colorIndex);
        let colors = [...this.state.colors];
        console.log(colors);
        let updateColor = {...colors[colorIndex]};
        console.log(updateColor);
        updateColor = {
            color: this.retreiveRandColor(updateColor.color),
            prevColor: updateColor.color
        }
        console.log(updateColor);
        colors[colorIndex] = updateColor;
        this.setState({colors})
        // console.log(this);
        // this.setState( { colors[colorIndex]: { color: this.retreiveRandColor(this.color), prevColor: this.color} });
        // console.log(this);
    }

    handleClick(e) {
        this.generateColors();
    }


    render() {
        return (
            <div className="Colorblock">
                <div className="Colors">
                    {this.state.colors.map( 
                        (item, index) =>
                            <Colorblock updateColor={this.generateColor} colorIndex={index} color={item.color} />
                        )}
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