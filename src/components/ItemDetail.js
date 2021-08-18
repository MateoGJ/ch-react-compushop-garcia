import { useState } from 'react';

import ItemCount from './ItemCount';

const ItemDetail = ({producto = {}}) => {
    const [cantidad, setCantidad] = useState(0);

    const agregarAlCarrito = (_cantidad) => {
        const cantidadFinal = (parseInt(cantidad, 10) + parseInt(_cantidad, 10));
        if (producto.stock >= cantidadFinal ) {
            setCantidad(cantidadFinal);
        }
    };

    return (
      <>
        <div className="container">
            <img className="card-img-top img-fluid " alt="" src={`/images/${producto.imagen}`}/>
        </div>
        <div className="card-body">
          <p className="card-text">{producto.descripcion}</p>
          <p className="card-text">Precio: $ {producto.precio}</p>
          <p className="card-text">En carrito: {cantidad}</p>
          
          <ItemCount stock={producto.stock} inicial="1" onAdd={(_cantidad) => agregarAlCarrito(_cantidad) } />
        </div>
      </>
    );
}

export default ItemDetail;
