import React from 'react';

const GameDetailsSideBar = (props) => {
  let mappedScreenshots;

  

  if (props.game && props.game.screenshots) {
    mappedScreenshots = props.game.screenshots.map(fileName => 
      (<img 
        className="screenshot"
        src={`https://s3-us-west-1.amazonaws.com/steam-game-images1/${fileName}.jpg`}
        alt="game screenshot"
        key={fileName.toString()}
      />));
  }
  if (props.game === undefined || props.game == []){
    return <div> Game data was empty: {props.game}</div>
  } else {
    return (
      <div className="side-bar">
        <div className="side-bar-game-info-text">
          <div className="side-bar-title">{props.game.title}</div>
          <div>{props.game.description}</div>
          <div>{props.game.categories}</div>
        </div>
        <div className="screenshots">{mappedScreenshots}</div>
      </div>
    );
  }
  
};

export default GameDetailsSideBar;
