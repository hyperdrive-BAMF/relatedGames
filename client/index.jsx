import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GameList from './components/GameList.jsx';
import GameDetailsSideBar from './components/GameDetailsSideBar.jsx';
import style from '../client/style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      selectedGame: {},
    };
    this.handleGameMouseEntry = this.handleGameMouseEntry.bind(this);
    this.handleGameMouseExit = this.handleGameMouseExit.bind(this);
    this.getGameList();
  }

  getGameList() {
    $.ajax({
      type: 'GET',
      url: '/games',
      success: (data) => {
        this.setState({
          games: data,
          selectedGame: data[0],
        });
      },
      error: (err) => {
        console.log('error in GET', err);
      },
    });
  }

  handleGameMouseEntry(game) {
    this.setState({
      selectedGame: game,
    });
  }

  handleGameMouseExit() {
    console.log('this needs to go');
  }

  render() {
    return (
      <div className="related-games-container">
        <div className="game-list-container">
        <div className="game-list-top-bar">Related Games</div>
          <GameList 
            handleGameMouseEntry={this.handleGameMouseEntry} 
            handleGameMouseExit={this.handleGameMouseExit} 
            games={this.state.games}
            selectedGame={this.state.selectedGame}
          />
          <GameDetailsSideBar
            game={this.state.selectedGame} 
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

