import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lotto from "./Lotto";

function App() {
  return (
    <div className="App">
      <Lotto />
      <Lotto type="mini daily" numBalls= {4} max= {18} />
    </div>
  );
}

export default App;
