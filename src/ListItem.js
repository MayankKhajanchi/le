import React from 'react';
import Counter from './Counter';

class ListItem extends React.Component {

  render(){
      return(
          <main>
          {this.props.data.data[0].name}
          <Counter/>
          </main>
      );
  }
}
export default ListItem;