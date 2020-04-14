import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from './words'

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
    this.handleReset = this.reset.bind(this);
  }

  getInitialState = () => ({
    nWrong: 0, 
    guessed: new Set(), 
    answer: randomWord(),
    gameOver: false 
  })

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
      gameOver: (st.nWrong === this.props.maxWrong - 1 ? true : false)
      } // added in a -1 to maxwrong to account for render order
    ), this.checkGameOver());
  }

  checkGameOver () {
    console.log(this.state);
    if (this.state.gameOver) {
      this.gameOver();
    }
  }

  gameOver () {
    this.generateButtons();
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.gameOver ? true : this.state.guessed.has(ltr)}
        alt={ltr + " button"}
      >
        {ltr}
      </button>
    ));
  }

  handleReset (e) {
    this.reset();
  }

  reset () {
    this.setState(this.getInitialState());
  }

  /** render: render game */
  render() {
    let altText = this.state.nWrong + " of " + this.props.maxWrong + " incorrect guesses";
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <p>Number of wrong guesses: {this.state.nWrong}</p>
        <img src={this.props.images[this.state.nWrong]} alt={altText} />
        <p className='Hangman-word'>{this.guessedWord()}</p>
        <p className='Hangman-btns'>{this.generateButtons()}</p>
        <button className='Hangman-resetbtn' onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Hangman;
