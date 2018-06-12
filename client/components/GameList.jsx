import React from 'react';
import GameListEntry from './GameListEntry.jsx';

const GameList = props => (
  <div className="game-list" >
    {props.games.map(game => (
      <GameListEntry 
        game={game} 
        key={game.title}
        handleGameMouseEntry={props.handleGameMouseEntry}
        handleGameMouseExit={props.handleGameMouseExit}
        selectedGame={props.selectedGame}
      />
    ))}
  </div>
);

export default GameList;
