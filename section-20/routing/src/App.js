import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Dog from './Dog';
import Contact from './Contact';
import About from './About';
import styled from 'styled-components';

const AppDiv = styled.div`
  text-align: center;
  display: flex;
  background: rgba(240, 98, 146, 1);
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const AppNav = styled.nav`
  width: 50%;
  display: flex;
  margin: 1rem auto;
  justify-content: space-around;
`;

function App() {
  return (
    <AppDiv>
      <AppNav>
        <NavLink to="/">dog</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </AppNav>
      <Switch>
        <Route exact path="/" component={Dog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </AppDiv>
  );
}

export default App;
