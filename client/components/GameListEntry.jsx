import React from 'react';

const GameListEntry = (props) => {

  const onMouseEnterWrapper = (game, callback) => {
    return () => {
      callback(game);
    };
  };

  return (
    <div 
      className={props.game.title === props.selectedGame.title ? 'current-game' : 'game-entry'}
      onMouseEnter={onMouseEnterWrapper(props.game, props.handleGameMouseEntry)}
      onMouseLeave={props.handleGameMouseExit}
    >
    <div className="game-icon">
      <img 
        src={`https://s3-us-west-1.amazonaws.com/steam-game-logos/${props.game.logoFileName}.jpg`}
        alt="game icon"
      />
    </div>
      <div className="game-info-text">
        <div className="game-title">{props.game.title}</div>
        <div className="game-price">{props.game.price}</div>
        <div className="game-categories">{props.game.categories}</div>
      </div>
    </div>
  );
};

export default GameListEntry;
