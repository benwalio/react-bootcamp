import React from 'react';
import Jokes from './Jokes';
import styled from 'styled-components';

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(130deg, rgba(179,229,252,1) 50%, rgba(240,98,146,1) 50%);
  color: #78979c;
  font-family: 'Rubik', sans-serif;
`;

function App() {
  return (
    <AppDiv>
      <Jokes />
    </AppDiv>
  );
}

export default App;
