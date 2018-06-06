import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GameList from './components/GameList.jsx';
import GameDetailsSideBar from './components/GameDetailsSideBar.jsx'
import style from '../client/style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
    this.handleGameMouseEntry = this.handleGameMouseEntry.bind(this)
    this.handleGameMouseExit = this.handleGameMouseExit.bind(this)
    this.getGameList();
  }

  handleGameMouseEntry(){
    console.log('entered mouse entry handler')
  }

  handleGameMouseExit(){
    console.log('entered mouse exit handler')
  }

  getGameList(){
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:3002/games',
      success: (data) => {
        console.log('successful GET')
        this.setState({
          games: data
        });
      },
      error: (err) => {
        console.log('error in GET')
      }
    })
  }

  render() {
    return (
      <div className="game-list-container">
          <GameList 
            handleGameMouseEntry={this.handleGameMouseEntry} 
            handleGameMouseExit={this.handleGameMouseExit} 
            games={this.state.games}
          />
          <GameDetailsSideBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

