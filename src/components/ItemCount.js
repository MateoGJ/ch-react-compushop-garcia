import React from 'react';

class ItemCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        inicial: this.props.inicial,
        stock: this.props.stock,
        onAdd: this.props.onAdd
    };

  }

  agregarAlCarrito = () => {
        this.state.onAdd(this.state.inicial);
        this.setState({inicial: this.props.inicial});
  }

  setCantidad = (incrementar = true) => {
      let agregar = parseInt(this.state.inicial, 0);
      if (incrementar) {
          if ( agregar < this.state.stock ) {
              this.setState( {inicial: agregar + 1});
          }
      } else {
          if ( agregar  > 0 ) {
              this.setState( {inicial: agregar - 1});
          }
      }
  }

  render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                  <span className="btn btn-secondary" onClick={ () => this.setCantidad(false) }>-</span>
                </div>
                <div className="col text-center">
                  { this.state.inicial }
                </div>
                <div className="col text-center">
                  <span className="btn btn-secondary" onClick={() => this.setCantidad(true) }>+</span>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                  <span className="btn btn-primary" onClick={this.agregarAlCarrito}>Agregar al carrito</span>
                </div>
            </div>
        </div>
      );
  }
}

export default ItemCount;
