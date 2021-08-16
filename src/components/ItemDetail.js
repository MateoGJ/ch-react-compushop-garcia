import React, { useState } from 'react';

import ItemCount from './ItemCount';

const ItemDetail = ({producto}) => {
    const [cantidad, setCantidad] = React.useState(0);

    const agregarAlCarrito = (_cantidad) => {
        const cantidadFinal = (parseInt(cantidad, 10) + parseInt(_cantidad, 10));
        if (producto.stock >= cantidadFinal ) {
            setCantidad(cantidadFinal);
        }
    };

    return (
      <>
        <img className="card-img-top" alt="" src={producto.imagen}/>
        <div className="card-body">
          <h5 className="text-center card-title"><strong>{producto.titulo}</strong></h5>
          <p className="card-text">{producto.descripcion}</p>
          <p className="card-text">Precio: $ {producto.precio}</p>
          <p className="card-text">En carrito: {cantidad}</p>
          <p className="text-right card-text"><a href="">Ver más</a></p>
          
          <ItemCount stock={producto.stock} inicial="1" onAdd={(_cantidad) => agregarAlCarrito(_cantidad) } />
        </div>
      </>
    );
}

export default ItemDetail;
