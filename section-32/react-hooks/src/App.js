import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleHook from './ToggleHook';
import CounterClass from './CounterClass';
import CounterHook from './CounterHook';
import FormHook from './FormHook';

function App() {
  return (
    <div className="App">
      <FormHook />
      <ToggleHook />
      <CounterClass />
      <CounterHook />
    </div>
  );
}

export default App;
