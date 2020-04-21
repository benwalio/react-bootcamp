import React from 'react';
import logo from './logo.svg';
import './App.css';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';

function App() {
  return (
    <div className="App">
      <GithubUserInfo username="benwalio" />
    </div>
  );
}

export default App;
