import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lotto from "./Lotto";

function App() {
  return (
    <div className="App">
      <Lotto game={ {type:"Lotto", balls: 6, max: 32} } />
    </div>
  );
}

export default App;
