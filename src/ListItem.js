import React from 'react';
import Counter from './Counter';

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.renderA = this.renderA.bind(this);
        this.renderB = this.renderB.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
          name: 'Mayank',
          address: 'Bangalore',
          contact: '1234567890'
        }
      }
      renderA = () => {
        this.setState(() => {
          return {
            name: this.props.data.data[0].name,
            address: this.props.data.data[0].address,
            contact: this.props.data.data[0].contactNumber,
          };
        });
      }
      renderB = () => {
        this.setState(() => {
          return {
            name: this.props.data.data[1].name,
            address: this.props.data.data[1].address,
            contact: this.props.data.data[1].contactNumber,
          };
        });
      }
      reset = () => {
        this.setState(() => {
          return {
            name: 'Mayank',
            address: 'Bangalore',
            contact: '1234567890',
          };
        });
      }
  render(){
      return(
        <main>
            <button onClick={this.renderA}>Kadugodi details</button>
            <button onClick={this.renderB}>Hebbal details</button>
            <button onClick={this.reset}>Reset</button>
            <p>{this.state.name}</p>
            <p>{this.state.address}</p>
            <p>{this.state.contact}</p>
            <h2>Saplings from Kadugodi</h2>       
            <div>
                {this.props.data.data[0].saplings.map(saps => 
                    <div key={saps.id} style={{paddingLeft: 0, marginLeft: 0}}>
                        {saps.name}
                        <Counter/>
                        {saps.types.price}
                    </div>
                )}
            </div>
            <h2>Saplings from Hebal</h2>
            <div>
                {this.props.data.data[1].saplings.map(saps => 
                    <div key={saps.id}>
                        {saps.name}
                        <Counter/>
                        {saps.types.price}
                    </div>
                )}
            </div>
        </main>
      );
  }
}
export default ListItem;