import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Card from './Card';
import { v4 as uuid } from 'uuid';

let deckID = "";

const CardsDiv = styled.div`
    background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${'' /* margin: auto 30%; */}
    height: 100vh;
`;

const CardsPile = styled.div`
    margin: 4rem 0;
    text-align: center;
    width: 226px;
    height: 314px;
`;

const CardsButton = styled.button`
    margin: 1rem auto;
    
    ${props => props.remaining > 0 && css`
        box-shadow: 0px 6px 24px 0px #276873;
        background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);

        &:hover {
            background:linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
            background-color:#408c99;
        }
    `}

    ${props => props.remaining === 0 && css`
        box-shadow: 0px 6px 24px 0px #732727;
        background:linear-gradient(to bottom, #b86089 5%, #7d3350 100%);

        &:hover {
            background:linear-gradient(to bottom, #7d3350 5%, #b86089 100%);
	        background-color:#7d3350;
        }
    `}

	background-color:#599bb3;
	border-radius:5px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	padding:0.5rem 2rem;
	text-decoration:none;
	text-shadow:1px 1px 2px #3d768a;

    &:active {
        position:relative;
	    top:1px;
    }
`;

class Cards extends Component {
    constructor (props) {
        super(props);
        this.state = this.initialState();
        this.handleClick = this.handleClick.bind(this);
        this.drawCard = this.drawCard.bind(this);
    };
    
    initialState () {
        return ({
            remaining: 0,
            cards: [],
            tilt: 0,
            shift: [0,0]
        })
    };

    componentDidMount() {
        axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then( response => {
            this.setState({
                remaining: response.data.remaining
            });
            deckID = response.data.deck_id;
        })
    };

    handleClick(e) {
        if (this.state.remaining === 0) {
            this.reshuffleDeck();
        } else {
            this.drawCard();
        }
    }

    drawCard() {
        axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/`).then( response => {
            console.log(response.data.cards);
            let responseCards = response.data.cards[0];
            let card = {
                id: uuid(),
                imgUrl: responseCards.image,
                suit: responseCards.suit,
                face: responseCards.value,
                tilt: Math.ceil(Math.random() * 35) * (Math.random() < 0.5? 1 : -1),
                shift: [Math.ceil(Math.random() * 10) * (Math.random() < 0.5? 1 : -1), Math.ceil(Math.random() * 10) * (Math.random() < 0.5? 1 : -1)]
            };
            let cards = [...this.state.cards];
            cards.push(card);
            this.setState({
                cards: cards,
                remaining: response.data.remaining
            });
        });
    }

    reshuffleDeck() {
        axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`).then( () => {
            this.drawCard();
        });
    }

    renderCards() {
        return (
            <CardsPile>
                {this.state.cards.map(card =>
                    <Card
                        key={card.id}
                        image={card.imgUrl}
                        face={card.face}
                        suit={card.suit}
                        tilt={card.tilt}
                        shift={card.shift}
                    />
                )}
            </CardsPile>
        );
    };

    render() {
        return (
            <CardsDiv>
                {/* <Card /> */}
                <CardsButton remaining={this.state.remaining} onClick={this.handleClick}>{this.state.remaining > 0 ? "new card" : "shuffle deck"}</CardsButton>
                {this.renderCards()}
            </CardsDiv>
        );
    }
}

export default Cards;