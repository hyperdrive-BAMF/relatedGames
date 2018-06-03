import React from 'react';

const GameListEntry = (props) => (
  <div className="game-entry">
    <div>{props.game.title}</div>
    <div>{props.game.description}</div>
    <div>{props.game.price}</div>
    <div>{props.game.rating}</div>
  </div>
);

export default GameListEntry;