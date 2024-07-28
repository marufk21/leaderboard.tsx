import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Player from './Player';
import { streamers } from '../data/streamers';

const LeaderboardContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
`;

interface Streamer {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
}

const Leaderboard: React.FC = () => {
  const [players, setPlayers] = useState<Streamer[]>(streamers);
  const [prevPlayers, setPrevPlayers] = useState<Streamer[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevPlayers(players);

      setPlayers((prevPlayers) => {
        const updatedPlayers = prevPlayers.map((player) => ({
          ...player,
          score: player.score + Math.floor(Math.random() * 100),
        }));
        return updatedPlayers.sort((a, b) => b.score - a.score);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [players]);

  const hasPositionChanged = (id: string, newIndex: number) => {
    const oldIndex = prevPlayers.findIndex((player) => player.userID === id);
    return oldIndex !== -1 && oldIndex !== newIndex;
  };

  return (
    <LeaderboardContainer>
      {players.map((player, index) => (
        <Player
          key={player.userID}
          displayName={player.displayName}
          score={player.score}
          positionChange={hasPositionChanged(player.userID, index)}
        />
      ))}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
