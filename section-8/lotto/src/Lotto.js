import React, { Component } from 'react';
import Ball from "./Ball";
import "./Lotto.css";

class Lotto extends Component {
    static defaultProps = {
        type: "Lotto",
        numBalls: 6,
        max: 40
    };

    constructor (props) {
        super(props);
        this.state = {
            balls: Array.from({ length: this.props.numBalls })
        }
        this.spin= this.spin.bind(this);
    }

    // getInitialState = () => ({
    //     balls: Array.from({ length: this.props.max })
    // });
    
    // resetState = () => (
    //     this.setState(this.getInitialState())
    // );

    spin () {
        this.setState(
            st => ({ balls: st.balls.map(
                n => Math.ceil(Math.random() * (this.props.max - 1))
                )
            })
        )
        // this.resetState();
        // let balls = [];
        // for( let i = 0; i < this.props.game.balls; i++) {
        //     let ballNum = Math.ceil(Math.random() * (this.props.game.max - 1));
        //     // this.setState(st => {return {balls: [...st.balls, ballNum]};});
        //     // console.log(ballNum);   
        //     balls.push(ballNum);
        //     // this.setState(this.addBall(ballNum));
        // }
        // this.setState({ balls: [...this.state.balls, ...balls]});
        
    }

    addBall (num) {
        return {balls: [...this.state.balls, num]};
    }

    render() {
        // const lottoBalls = this.state.balls.map(b => <Ball ballNo={b} />);

        return (
            <div>
                <h1>{this.props.type}</h1>
                {/* {this.state.balls.map(b => <Ball ballNo={`${b}`} />)}
                <Ball ballNo= /> */}
                <div className="Lotto-balls">
                    {this.state.balls.map(b => 
                        <Ball ballNo={b} />)
                    }
                </div>
                {/* <Ball ballNo={3}/> */}
                <button onClick={this.spin}>roll balls</button>
            </div>
        );
    }
}

export default Lotto;