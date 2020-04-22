import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ls from 'local-storage';
import Joke from './Joke';

const url = "https://icanhazdadjoke.com/";
const header = { "Accept": "application/json" };
const apiCall = axios.create({
    baseURL: url,
    headers: header
});

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
    }
`;

const LoadingDiv = styled.div`
    display: flex;
    color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
        this.fillJokes();
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
                        <button onClick={this.handleClick}>click</button>
                    </JokesHeader>
                    {this.renderJokes()}
                </JokesDiv>
            );
        }
    }
}

export default Jokes;