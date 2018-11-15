import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import List from './List';
import GMap from './GMap';

const data = require('./data.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        
      <GMap 
        data = {data}
        latitude={data.data[0].latitude} 
        longitude={data.data[0].longitude} 
        latitude2={data.data[1].latitude} 
        longitude2={data.data[1].longitude}
      />

        <List data = {data}/>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
export default App;


