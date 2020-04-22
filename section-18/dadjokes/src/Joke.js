import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';

const BobDown = keyframes`
  0%, 50%, 100% {
    transform: translateY(0);
  }
  25%,
  75% {
    transform: translateY(3px);
  }
`;

const BobUp = keyframes`
  0%, 50%, 100% {
    transform: translateY(0);
  }
  25%,
  75% {
    transform: translateY(-3px);
  }
`;

const JokeDiv = styled.div`
    display: flex;
    border-bottom: 1px solid #eeeeee;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    padding: 1rem;
`;

const JokeContent = styled.div`
    text-align: center;
    width: 75%;
    font-size: 1.2rem;
`;

const JokeIcon = styled.i`
    width: 25%;
`;

const JokeVotes = styled.span`
    ${props => props.color && css`
        border: 2px solid ${props.color};
    `}
    width: 40%;
    
    line-height: 2rem;
    font-size: .9rem;
    font-weight: 300;
    text-align: center;
    border-radius: 50%;
    
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const JokeVotesDiv = styled.div`
    align-self: flex-start;
    justify-self: center;
    height: 2rem;
    margin: 1rem;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.1);

    i {
        font-size: 1rem;
        transition: 0.3s;
    }

    #up {
        justify-self: flex-start;
        cursor: pointer;
        :hover {
        animation-name: ${BobUp};
        animation-duration: 0.7s;
        animation-timing-function: ease-out;
        animation-delay: 0s;
        }
    }

    #down {
        justify-self: flex-end;
        cursor: pointer;
        text-align: right;
        :hover {     
            animation-name: ${BobDown};
            animation-duration: 0.7s;
            animation-timing-function: ease-out;
            animation-delay: 0s;
        }
        
    }
`;

const JokeRating = styled.i`
    ${props => props.color && css`
        color: ${props.color};
    `}

    text-align: right;
    font-size: 2rem;
    width: 10%;
    border-radius: 50%;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

class Joke extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let vote = 0;
        if (e.target.id === "up") {
            vote = 1;
        } else {
            vote = -1
        }
        this.props.addVote(this.props.id, vote);
    }
    
    render() {
        let ratingIcon = "";
        let rating = this.props.votes;

        ratingIcon = (rating > 10 ? {icon: "far fa-grin-squint-tears", color: "#4caf50"} : rating > 5 ? {icon: "far fa-grin-hearts", color: "#83bc4a"} : rating > 2 ? {icon: "far fa-laugh", color: "#cddc39"} : rating >= 0 ? {icon: "far fa-meh", color: "#ffeb3b"} : rating > -3 ? {icon: "far fa-grimace", color: "#ff9800"} : {icon: "far fa-meh-rolling-eyes", color: "#f44336"});
        return (
            <JokeDiv>
                <JokeVotesDiv>
                    <JokeIcon id="up" onClick={this.handleClick} className="fas fa-thumbs-up"></JokeIcon>
                    <JokeVotes color={ratingIcon.color}>{this.props.votes}</JokeVotes>
                    <JokeIcon id="down" onClick={this.handleClick} className="fas fa-thumbs-down"></JokeIcon>
                </JokeVotesDiv>
                <JokeContent>{this.props.content}</JokeContent>
                <JokeRating color={ratingIcon.color} className={ratingIcon.icon}></JokeRating>
            </JokeDiv>
        );
    }
}

export default Joke;