import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";
import styled, { keyframes } from 'styled-components';

const Gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GameBox = styled.div`
  background: white;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
  margin: auto 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GameHeader = styled.header`
  width: 100%;
  background: linear-gradient(-45deg, #673ab7, #9c27b0);
  background-size: 400% 400%;
  -webkit-animation: ${Gradient} 15s ease infinite;
  -moz-animation: ${Gradient} 15s ease infinite;
  animation: ${Gradient} 15s ease infinite;
`;

const AppTitle = styled.h1`
  margin-top: 1rem;
  color: white;
  margin-bottom: 0;
  font-weight: 100;
  display: inline-block;
  font-size: 3rem;
`;

const GameDiceSection = styled.section`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
`;

const GameButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameRerollB = styled.button`
  font-size: 2em;
  color: white;
  font-weight: 100;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(
    to right,
    #91eae4 0%,
    #7f7fd5 51%,
    #91eae4 100%
  );
  border-radius: 0.5rem;
  border: none;
  width: 50%;

  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
    background-position: right center;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      rolling: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
  }

  componentDidMount() {
    this.animateRoll();
  }

  animateRoll() {
    this.setState({rolling: true}, () => 
      setTimeout(this.roll, 1000)
    );
  };

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      rolling: false
    }));
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft > 0) {
      this.setState(st => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1)
        ]
      }));
    }
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    this.roll();
  }

  render() {
    return (
      <GameBox>
        <GameHeader>
          <AppTitle>Yahtzee!</AppTitle>

          <GameDiceSection>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              rolling={this.state.rolling}
            />
            <GameButtonWrapper>
              <GameRerollB
                disabled={this.state.locked.every(x => x)}
                onClick={this.animateRoll}
              >
                {this.state.rollsLeft} Rerolls Left
              </GameRerollB>
            </GameButtonWrapper>
          </GameDiceSection>
        </GameHeader>
        <ScoreTable doScore={this.doScore} scores={this.state.scores} />
      </GameBox>
    );
  }
}

export default Game;
