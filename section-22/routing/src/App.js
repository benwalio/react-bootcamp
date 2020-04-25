import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import Food from './Food';
import Drink from './Drink';
import FoodSearch from './FoodSearch';
import NavBar from './NavBar';

const AppDiv = styled.div`
  align-items: center;
  flex-direction: column;
`;

const AppLink = styled(Link)`

`;



function App() {
  return (
    <AppDiv>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/food/:name"
          render={routeProps => <Food {...routeProps} />}
        />
        <Route
          exact
          path="/food/:foodName/drink/:drinkName"
          render={routeProps => <Drink {...routeProps} />}
        />
        <Route
          exact
          path="/"
          render={routeProps => <FoodSearch {...routeProps} />}
        />
        <Route
          render={() => <h1>404 - not found</h1>}
        />
      </Switch>
    </AppDiv>
  );
}

export default App;
