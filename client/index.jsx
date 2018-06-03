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
  }

  render() {
    return (
    <div className="col-md-5">Hello from react!!!
      <GameList games={data}/>
    </div>
    )
  }
}

ReactDOM.render(<App data={data}/>, document.getElementById('app'));


/*
// Colors:
// rgba( 0, 0, 0, 0.2 );
// off hover: 
// title text color: #c7d5e0;
// categories & platform icons text color, on hover: #384959;

// linear-gradient( to bottom, rgba(42,71,94,1.0) 5%, rgba(42,71,94,0.0) 70%)

*/
