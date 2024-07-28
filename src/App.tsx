import React from 'react';
import Leaderboard from './components/Leaderboard';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>Streamer Leaderboard</h1>
      <Leaderboard />
    </AppContainer>
  );
};

export default App;
