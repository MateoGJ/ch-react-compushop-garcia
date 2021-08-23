import { useState } from 'react';
import { Link } from 'react-router-dom';

import ItemCount from './ItemCount';
import ItemDetailCantidadAgregada from './ItemDetailCantidadAgregada';

const ItemDetail = ({producto = {}}) => {
    const [cantidad, setCantidad] = useState(0);

    const agregarAlCarrito = (value) => {
        const cantidadFinal = (parseInt(cantidad, 10) + parseInt(value, 10));
        if (producto.stock >= cantidadFinal ) {
            setCantidad(cantidadFinal);
        }
    };

    return (
      <div className="wrapper row">
          <div className="preview col-md-6">
              <div className="preview-pic">
                  <img className="card-img-top img-fluid" src={`/images/${producto.imagen}`} />
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
                      <div className="col align-self-center">
                          {(() => {
                              if (cantidad > 0) {
                                  return  ( <Link to="/carrito" className="btn btn-danger">Terminar mi compra</Link> );
                              }
                              return (<ItemCount stock={producto.stock} inicial="1" onAdd={agregarAlCarrito} />);
                          })()}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default ItemDetail;
