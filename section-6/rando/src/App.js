import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rando from './Rando';

function App() {
  return (
    <div className="App">
      <Rando maxNum={50}/>
    </div>
  );
}

export default App;
