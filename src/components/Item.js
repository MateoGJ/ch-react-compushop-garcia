import React from 'react';
import ItemCount from './ItemCount';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        titulo: this.props.titulo,
        descripcion: this.props.descripcion,
        stockMaximo: this.props.stock,
        stock: 0,
        precio: this.props.precio
    };

  }

  agregarAlCarrito = (cantidad) => {
      const cantidadFinal = (parseInt(this.state.stock, 10) + parseInt(cantidad, 10));
      console.log('cantidad final: ' + cantidadFinal);
      console.log('stock maximo: ' + this.state.stockMaximo);
      console.log('stock: ' + this.state.stock);
      if (this.state.stockMaximo >= cantidadFinal ) {
          this.setState({stock: cantidadFinal });
      }
  }


  render() {
      return (

        <div className="card" >
          <img className="card-img-top" alt="" src={this.state.imagen}/>
          <div className="card-body">
            <h5 className="text-center card-title">{this.state.titulo}</h5>
            <p className="card-text">{this.state.descripcion}</p>
            <p className="card-text">Precio: $ {this.state.precio}</p>
            <p className="card-text">En carrito: {this.state.stock}</p>
            <p className="text-right card-text"><a href="">Ver más</a></p>
            
            <ItemCount stock={this.state.stockMaximo} inicial="1" onAdd={(cantidad) => this.agregarAlCarrito(cantidad) } />
          </div>
        </div>

      );
  }
}

export default Item;

