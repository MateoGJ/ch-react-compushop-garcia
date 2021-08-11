import React from 'react';
import ItemList from './ItemList';

class ItemListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        greeting: this.props.greeting,
        stock: 0,
        stockMaximo: 10
    };
  }

  render() {
    return (
        <div style={{color: 'green'}}>
          {this.state.greeting}
          <ItemList /> 
        </div>
    );
  }
}

export default ItemListContainer;
