import React from 'react';
import ItemCount from './ItemCount';

class ItemListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        greeting: this.props.greeting,
        stock: 0,
        stockMaximo: 10
    };
  }

  agregarAlCarrito = (cantidad) => {
      const cantidadFinal = (parseInt(this.state.stock, 10) + parseInt(cantidad, 10));
      if (this.state.stockMaximo >= cantidadFinal ) {
          this.setState({stock: cantidadFinal });
      }
  }

  render() {
    return (
        <div style={{color: 'green'}}>
          {this.state.greeting}
          <span> Cantidad de items en el carrito: {this.state.stock}</span>

          <ItemCount stock={this.state.stockMaximo} inicial="1" onAdd={(cantidad) => this.agregarAlCarrito(cantidad) }/>
        </div>
    );
  }
}

export default ItemListContainer;
