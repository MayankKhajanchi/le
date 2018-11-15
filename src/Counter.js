import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div style={{backgroundColor: 'lightgreen', width: 50}}>
        <span onClick={this.handleMinusOne}>-</span>
        <span style={{paddingLeft: 10, paddingRight: 10}}>{this.state.count}</span>
        <span onClick={this.handleAddOne}>+</span>
        
      </div>
    );
  }
}

export default Counter;