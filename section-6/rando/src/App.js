import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rando from './Rando';
import Click from './Click';

function App() {
  return (
    <div className="App">
      <Rando maxNum={50}/>
      <Click />
    </div>
  );
}

export default App;
