import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './index';
// import * as serviceWorker from './serviceWorker';
import {choice, remove} from './helpers';
import food from './foods';

// draw fruit from array
let fruit = food();
console.log(fruit);

// log message 'one $froot pls

let pickedFruit = choice(fruit);
console.log ("one " + pickedFruit + " pls");

// msg 'her is froot $froot

console.log(" here is " + pickedFruit);

// msg '1mo pls

console.log(" one more " + pickedFruit + " pls");

// remove froot from array

fruit = remove(fruit, pickedFruit);

// we out, we have $froots.len left

console.log( "we out, we have " + fruit.length + " left");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
