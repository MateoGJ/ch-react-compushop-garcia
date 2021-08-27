import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import ItemCount from './ItemCount';
import ItemDetailCantidadAgregada from './ItemDetailCantidadAgregada';
import { useCart }  from '../contexts/CartContext';

const ItemDetail = ({producto = {}}) => {
    const [cantidad, setCantidad] = useState(0);

    const items = useCart();

    const agregarAlCarrito = (value) => {
        const cantidadFinal = (parseInt(cantidad, 10) + parseInt(value, 10));
        if (producto.stock >= cantidadFinal ) {
            setCantidad(cantidadFinal);
            items.addItem(producto, value);
        }
    };

    return (
      <div className="wrapper row">
          <div className="preview col-md-6">
              <div className="preview-pic">
                  <img className="card-img-top img-fluid" alt="" src={`/images/${producto.imagen}`} />
              </div>
          </div>
          <div className="details col-md-6">
              <p className="product-description mt-5">{producto.descripcion}</p>
              <h4 className="price">Precio: <span>$ {producto.precio}</span></h4>
              <h5 className="sizes">
                  <ItemDetailCantidadAgregada cantidad={cantidad} precio={producto.precio} />
              </h5>
              <div className="action mt-5">
                  <div className="row">
                          {(() => {
                              if (cantidad > 0) {
                                  return  ( 
                                      <>
                                      <div className="col align-self-center">
                                          <Link to="/carrito" className="btn btn-danger col-md-6">Terminar mi compra</Link> 
                                          <Link to="/" className="btn btn-outline-primary col-md-6">Seguir comprando</Link> 
                                      </div>
                                      </>
                                  );
                              }
                              return (
                                <div className="col align-self-center">
                                    <ItemCount stock={producto.stock} inicial="1" onAdd={agregarAlCarrito} />
                                </div>
                              );
                          })()}
                  </div>
              </div>
          </div>
      </div>
    );
}

export default ItemDetail;
