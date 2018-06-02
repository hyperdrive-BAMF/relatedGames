import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery'
import data from './dummyData.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }

  render() {
    return (
    <div className="col-md-5">Hello from react!!!</div>
    )
  }
}



ReactDOM.render(<App data={data}/>, document.getElementById('app'));