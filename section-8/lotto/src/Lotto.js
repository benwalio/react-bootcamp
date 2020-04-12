import React, { Component } from 'react';
import Ball from "./Ball";

class Lotto extends Component {
    constructor (props) {
        super(props);
        this.state = this.getInitialState();
        this.spin= this.spin.bind(this);
    }

    getInitialState = () => ({
        balls: []
    });
    
    resetState = () => (
        this.setState(this.getInitialState())
    );

    spin () {
        this.resetState();
        let balls = [];
        for( let i = 0; i < this.props.game.balls; i++) {
            let ballNum = Math.ceil(Math.random() * (this.props.game.max - 1));
            // this.setState(st => {return {balls: [...st.balls, ballNum]};});
            // console.log(ballNum);   
            balls.push(ballNum);
            // this.setState(this.addBall(ballNum));
        }
        this.setState({ balls: [...this.state.balls, ...balls]});
        
    }

    addBall (num) {
        return {balls: [...this.state.balls, num]};
    }

    render() {
        return (
            <div>
                <h1>{this.props.game.type}</h1>
                {this.state.balls.map(b => <Ball ballNo={`${b}`} />)}
                <Ball ballNo= />
                <Ball ballNo={3}/>
                <button onClick={this.spin}>roll balls</button>
            </div>
        );
    }
}

export default Lotto;