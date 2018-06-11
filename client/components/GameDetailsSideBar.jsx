import React from 'react';

const GameDetailsSideBar = props => (
  <div className="side-bar">
    <div className="side-bar-game-info-text">
      <div className="side-bar-title">{props.game.title}</div>
      <div>{props.game.description}</div>
      <div>{props.game.categories}</div>
    </div>
    <div className="screenshots">
      {props.game.screenshots ? props.game.screenshots.map((fileName, index) => 
        (<img 
          className="screenshot"
          src={`https://s3-us-west-1.amazonaws.com/steam-game-images1/${fileName}.jpg`}
          alt="failed to load"
          key={index}
        />)) : 'no screenshots to display'}
    </div>
  </div>
);

export default GameDetailsSideBar;
