import React from 'react';
import GameListEntry from './GameListEntry.jsx';

const GameList = props => (
  <div className="game-list" >
    {props.games.map((game, index) => (
      <GameListEntry 
        game={game} 
        key={index}
        handleGameMouseEntry={props.handleGameMouseEntry}
        handleGameMouseExit={props.handleGameMouseExit}
        selectedGame={props.selectedGame}
      />
    ))}
  </div>
);

export default GameList;
