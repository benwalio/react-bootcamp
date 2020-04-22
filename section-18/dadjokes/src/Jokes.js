import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import ls from 'local-storage';
import Joke from './Joke';

const url = "https://icanhazdadjoke.com/";
const header = { "Accept": "application/json" };
const apiCall = axios.create({
    baseURL: url,
    headers: header
});

const ShakeSlow = keyframes`
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  2% {
    transform: translate(5px, -6px) rotate(3.5deg);
  }
  4% {
    transform: translate(1px, -4px) rotate(2.5deg);
  }
  6% {
    transform: translate(-4px, -6px) rotate(0.5deg);
  }
  8% {
    transform: translate(2px, -9px) rotate(-0.5deg);
  }
  10% {
    transform: translate(5px, -5px) rotate(0.5deg);
  }
  12% {
    transform: translate(6px, 1px) rotate(0.5deg);
  }
  14% {
    transform: translate(5px, 2px) rotate(-1.5deg);
  }
  16% {
    transform: translate(8px, -6px) rotate(-0.5deg);
  }
  18% {
    transform: translate(-6px, -6px) rotate(3.5deg);
  }
  20% {
    transform: translate(-8px, 7px) rotate(-1.5deg);
  }
  22% {
    transform: translate(3px, 9px) rotate(1.5deg);
  }
  24% {
    transform: translate(-7px, 6px) rotate(3.5deg);
  }
  26% {
    transform: translate(9px, -5px) rotate(1.5deg);
  }
  28% {
    transform: translate(10px, 1px) rotate(-1.5deg);
  }
  30% {
    transform: translate(-8px, 5px) rotate(3.5deg);
  }
  32% {
    transform: translate(-9px, 5px) rotate(-1.5deg);
  }
  34% {
    transform: translate(-6px, 8px) rotate(0.5deg);
  }
  36% {
    transform: translate(6px, -2px) rotate(0.5deg);
  }
  38% {
    transform: translate(3px, 3px) rotate(3.5deg);
  }
  40% {
    transform: translate(6px, 10px) rotate(-1.5deg);
  }
  42% {
    transform: translate(2px, -2px) rotate(1.5deg);
  }
  44% {
    transform: translate(-6px, 8px) rotate(-0.5deg);
  }
  46% {
    transform: translate(-5px, 9px) rotate(-2.5deg);
  }
  48% {
    transform: translate(-4px, 2px) rotate(3.5deg);
  }
  50% {
    transform: translate(-9px, -3px) rotate(-1.5deg);
  }
  52% {
    transform: translate(3px, -2px) rotate(1.5deg);
  }
  54% {
    transform: translate(10px, 8px) rotate(3.5deg);
  }
  56% {
    transform: translate(7px, 8px) rotate(0.5deg);
  }
  58% {
    transform: translate(-4px, -3px) rotate(-0.5deg);
  }
  60% {
    transform: translate(9px, -4px) rotate(-1.5deg);
  }
  62% {
    transform: translate(-8px, -6px) rotate(1.5deg);
  }
  64% {
    transform: translate(-1px, -2px) rotate(3.5deg);
  }
  66% {
    transform: translate(0px, -8px) rotate(0.5deg);
  }
  68% {
    transform: translate(8px, -7px) rotate(0.5deg);
  }
  70% {
    transform: translate(3px, 4px) rotate(1.5deg);
  }
  72% {
    transform: translate(3px, 2px) rotate(1.5deg);
  }
  74% {
    transform: translate(-5px, -9px) rotate(0.5deg);
  }
  76% {
    transform: translate(1px, -8px) rotate(2.5deg);
  }
  78% {
    transform: translate(3px, 7px) rotate(-1.5deg);
  }
  80% {
    transform: translate(-9px, -4px) rotate(0.5deg);
  }
  82% {
    transform: translate(0px, -4px) rotate(-2.5deg);
  }
  84% {
    transform: translate(-7px, -3px) rotate(0.5deg);
  }
  86% {
    transform: translate(-8px, 6px) rotate(-1.5deg);
  }
  88% {
    transform: translate(3px, 4px) rotate(2.5deg);
  }
  90% {
    transform: translate(5px, 7px) rotate(2.5deg);
  }
  92% {
    transform: translate(2px, -8px) rotate(-2.5deg);
  }
  94% {
    transform: translate(-1px, -2px) rotate(-1.5deg);
  }
  96% {
    transform: translate(-4px, 10px) rotate(-1.5deg);
  }
  98% {
    transform: translate(10px, -9px) rotate(2.5deg);
  }
`;

const JokesDiv = styled.div` 
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 80%;
    margin: auto;
`;

const JokesHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    padding: 9rem 4rem;
    background-color: #9575cd;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1), inset 0 0 25px #7e57c2;
    z-index: 2;
`;

const JokeList = styled.div`
    width: 70%;
    height: 90%;
    background: white;
    align-self: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: scroll;
`;

const JokesTitle = styled.div`
    font-size: 4rem;
    margin: 2rem;
    color: white;
    font-weight: 300;
    letter-spacing: 0.4rem;
    text-align: center;

    span {
        letter-spacing: 0;
        font-weight: 700;
    }

    i {
        margin-top: 1rem;
        width: 50%;
        text-shadow: 0 5px 10px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.1);

        :hover {
            animation-name: ${ShakeSlow};
            animation-duration: 5s;
            animation-timing-function: ease-in-out;
            animation-delay: 0s;
        }
    }
`;

const LoadingDiv = styled.div`
    display: flex;
    color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const JokeButton = styled.button`
    font-size: 1.2rem;
    width: 50%;
    color: white;
    font-weight: 700;
    border-radius: 2rem;
    cursor: pointer;
    margin: 1rem;
    word-spacing: 1.2rem;
    padding: .6rem 1.2rem;
    background: linear-gradient(130deg, rgba(179,229,252,1) 50%, rgba(240,98,146,1) 50%);
    border: none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.1);
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: 0.8s;

    :hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
    }
`;

class Jokes extends Component {
    static defaultProps = {
        numJokes: 10
    }

    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.handleClick = this.handleClick.bind(this);
        this.fetchJoke = this.fetchJoke.bind(this);
        this.addJoke = this.addJoke.bind(this);
        this.addVote = this.addVote.bind(this);
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) {
            this.fillJokes();
        } else if (this.state.loading) {
            this.setState({
                loading: false
            })
        }
    }

    componentDidUpdate() {
        ls.set('jokes', this.state.jokes)
    }
    
    initialState() {
        return ({
            jokes: ls.get('jokes') || [],
            loading: true
        })
    }

    async fetchJoke() {
        let response = await apiCall.get();
        let joke = { id: response.data.id, joke: response.data.joke}
        for(let i = 0; i < this.state.jokes.length; i++) {
            if(joke.id === this.state.jokes[i].id) {
                joke = this.fetchJoke();
            }
        }
        return joke;
    }

    async addJoke() {
        let joke = await this.fetchJoke();
        joke.votes = 0;
        let jokes = [...this.state.jokes, joke];
        this.setState({
            jokes: jokes,
            loading: false
        })
    }

    addVote(id, val) {
        let jokeIndex = this.state.jokes.findIndex(joke => joke.id === id);
        let jokes = this.state.jokes;
        jokes[jokeIndex].votes = jokes[jokeIndex].votes + val;

        jokes.sort((a, b) => a.votes < b.votes);

        this.setState({
            jokes: jokes
        })
    }

    fillJokes() {
        this.setState({
            loading: true
        })
        if (this.state.jokes.length < 10) {
            for(let i = this.state.jokes.length; i < this.props.numJokes; i++) {
                this.addJoke();
            }
        } else {
            ls.set('jokes', []);
            this.setState(this.initialState(), () => this.fillJokes());
        }
        
    }

    handleClick(e) {
        this.fillJokes();
    }

    renderJokes() {
        return (
            <JokeList>
                {this.state.jokes.map( joke =>
                    <Joke 
                        key={joke.id}
                        id={joke.id}
                        content={joke.joke}
                        votes={joke.votes}
                        addVote={this.addVote}
                    />
                )}
            </JokeList>
        )

    }

    render() {
        if(this.state.loading) {
            return (
                <LoadingDiv>
                    <i className="far fa-8x fa-laugh fa-spin"></i>
                    <JokesTitle>loading...</JokesTitle>
                </LoadingDiv>
            )
        } else {
            return (
                <JokesDiv>
                    <JokesHeader>
                        <JokesTitle><span>dad</span> jokes <i className="fas fa-grin-squint-tears"></i></JokesTitle>
                        <JokeButton onClick={this.handleClick}>fetch jokes</JokeButton>
                    </JokesHeader>
                    {this.renderJokes()}
                </JokesDiv>
            );
        }
    }
}

export default Jokes;