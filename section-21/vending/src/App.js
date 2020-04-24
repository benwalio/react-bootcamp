import React from 'react';
import './App.css';
import styled from 'styled-components';
import VendingMachine from './VendingMachine';
import { Route, Switch, Link } from 'react-router-dom';
import Cheetos from './Cheetos';
import IceCream from './IceCream';
import Pretzels from './Pretzels';

const AppDiv = styled.div`
  
`;

const AppNav = styled.nav`
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: space-around;
`;

const AppLink = styled(Link)`

`;

function App() {
  return (
    <AppDiv>
      <AppNav>
          <AppLink to="/">vending</AppLink>
          <AppLink to="/cheetos">cheetos</AppLink>
          <AppLink to="/ice-cream">ice cream</AppLink>
          <AppLink to="/pretzels">pretzels</AppLink>
        </AppNav>
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/cheetos" component={Cheetos} />
          <Route exact path="/ice-cream" component={IceCream} />
          <Route exact path="/pretzels" component={Pretzels} />
        </Switch>
    </AppDiv>
  );
}

export default App;
