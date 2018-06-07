import React from 'react';
import GameListEntry from './GameListEntry.jsx';

const GameList = props => (
  <div className="game-list" >
    <div className="game-list-heading">List of Related Games!</div>
    {props.games.map((game, index) => (
      <GameListEntry 
        game={game} 
        key={index}
        handleGameMouseEntry={props.handleGameMouseEntry}
        handleGameMouseExit={props.handleGameMouseExit}
      />
    ))}
  </div>
);

export default GameList;
