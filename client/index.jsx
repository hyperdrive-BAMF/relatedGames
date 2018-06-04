import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GameList from './components/GameList.jsx';
import data from './dummyData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
    this.handleGameMouseEntry = this.handleGameMouseEntry.bind(this)
    this.handleGameMouseExit = this.handleGameMouseExit.bind(this)
  }

  handleGameMouseEntry(){
    console.log('entered mouse entry handler')
  }

  handleGameMouseExit(){
    console.log('entered mouse exit handler')
  }

  render() {
    return (
    <div className="col-md-5">Hello from react!!!
      <GameList 
      handleGameMouseEntry={this.handleGameMouseEntry} 
      handleGameMouseExit={this.handleGameMouseExit} 
      games={data}
      />
    </div>
    )
  }
}

ReactDOM.render(<App data={data}/>, document.getElementById('app'));

