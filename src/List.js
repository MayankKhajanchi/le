import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  
  render() {
    return (
      <div>
        <ListItem data={this.props.data}/>
        
      </div>
    );
  }
}

export default List;