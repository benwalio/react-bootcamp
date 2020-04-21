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
`;

const JokesHeader = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const JokeList = styled.div`

`;

const JokesTitle = styled.h1`

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
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        ls.set('jokes', this.state.jokes)
    }
    
    initialState() {
        return ({
            jokes: ls.get('jokes') || []
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
        let jokes = [...this.state.jokes, joke];
        this.setState({
            jokes: jokes
        })
    }

    fillJokes() {
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
                        content={joke.joke}
                    />
                )}
            </JokeList>
        )

    }

    render() {
        return (
            <JokesDiv>
                <JokesHeader>
                    <JokesTitle>dad jokes <i className="fas fa-grin-squint-tears"></i></JokesTitle>
                    <button onClick={this.handleClick}>click</button>
                </JokesHeader>
                {this.renderJokes()}
            </JokesDiv>
        );
    }
}

export default Jokes;