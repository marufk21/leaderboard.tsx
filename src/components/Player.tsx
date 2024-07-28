import React from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div<{ positionChange: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  transition: all 0.5s ease;
  background-color: ${({ positionChange }) => (positionChange ? '#e0f7fa' : 'white')};
`;

interface PlayerProps {
  displayName: string;
  score: number;
  positionChange: boolean;
}

const Player: React.FC<PlayerProps> = ({ displayName, score, positionChange }) => {
  return (
    <PlayerContainer positionChange={positionChange}>
      <span>{displayName}</span>
      <span>{score}</span>
    </PlayerContainer>
  );
};

export default Player;
