import React from 'react';

const GameListEntry = props => (
  <div 
    className="game-entry" 
    onMouseEnter={props.handleGameMouseEntry}
    onMouseLeave={props.handleGameMouseExit}
  >
    <img 
      className="game-icon" 
      src={`https://s3-us-west-1.amazonaws.com/steam-game-logos/${props.game.logoFileName}.jpg`}
      alt="failed to load"
    />
    <div className="game-info-text">
      <div>{props.game.title}</div>
      <div>{props.game.description}</div>
      <div>{props.game.price}</div>
      <div>{props.game.categories}</div>
    </div>
  </div>
);

export default GameListEntry;
