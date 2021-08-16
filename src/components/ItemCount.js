import React, { useState } from 'react';

const ItemCount = ({ inicial, stock, onAdd}) => {
  const [cantidad, setCantidad] = React.useState(inicial);

  let _stock = stock;
  let _onAdd = onAdd;

  const agregarAlCarrito = () => {
      _onAdd(cantidad);
      setCantidad(inicial);
  };

  const modificarCantidad = (incrementar = true) => {
      let agregar = parseInt(cantidad, 0);
      if (incrementar) {
          if ( agregar < _stock ) {
              setCantidad(agregar + 1);
          }
      } else {
          if ( agregar  > 0 ) {
              setCantidad(agregar - 1);
          }
      }
  };

  return (
      <div className="container">
          <div className="row">
              <div className="col text-center">
                <span className="btn btn-secondary" onClick={ () => modificarCantidad(false) }>-</span>
              </div>
              <div className="col text-center">
                { cantidad }
              </div>
              <div className="col text-center">
                <span className="btn btn-secondary" onClick={() => modificarCantidad(true) }>+</span>
              </div>
          </div>
          <div className="row">
              <div className="col text-center">
                <span className="btn btn-primary" onClick={agregarAlCarrito}>Agregar al carrito</span>
              </div>
          </div>
      </div>
  );
};

export default ItemCount;
