import React from 'react';
import ListItem from './ListItem';
import './List.css';

class List extends React.Component {
  
  render() {
    return (
      <div id="list">
        <ListItem data={this.props.data}/>
      </div>
    );
  }
}

export default List;