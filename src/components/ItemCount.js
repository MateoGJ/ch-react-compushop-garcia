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
  }

  setCantidad = (incrementar = true) => {
      if (incrementar) {
          if ( this.state.inicial < this.state.stock ) {
              this.setState( {state: this.state.inicial++});
          }
      } else {
          if ( this.state.inicial > 0 ) {
              this.setState( {state: this.state.inicial--});
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
                <div className="col">
                </div>
                <div className="col text-center">
                  <span className="btn btn-primary" onClick={this.agregarAlCarrito}>Agregar al carrito</span>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
      );
  }
}

export default ItemCount;
