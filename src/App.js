import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Modal from 'react-modal';

import List from './List';
import GMap from './GMap';


const data = require('./data.json');
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = 'grey';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
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
        
        <button onClick={this.openModal}>Reserve my saplings</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >  
        <div>
        <h2 ref={subtitle => this.subtitle = subtitle}>Your selected saplings</h2>
          
          </div>
          <table>
  <tr>
    <th>Sapling Name</th>
    <th>Sapling Type</th>
    <th>Quantitiy</th>
    <th>Total Amount</th>
  </tr>
</table>
<button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
export default App;


