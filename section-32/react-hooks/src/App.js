import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToggleHook from "./ToggleHook";
import CounterClass from "./CounterClass";
import CounterHook from "./CounterHook";
import FormHook from "./FormHook";
import SWMovies from "./SWMovies";

function App() {
  return (
    <div className="App">
      <SWMovies />
      <FormHook />
      <ToggleHook />
      <CounterClass />
      <CounterHook />
    </div>
  );
}

export default App;
