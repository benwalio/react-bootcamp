import React from 'react';
import './App.css';
import ColorsMiddle from './ColorsMiddle';
import { StylesProvider } from '@material-ui/core/styles';

function App() {
  return (
    // this causes material UI to go first so overrides work
    <StylesProvider injectFirst>
      <div className="App">
        <ColorsMiddle />
      </div>
    </StylesProvider>
  );
}

export default App;
