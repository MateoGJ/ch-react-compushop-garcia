import React, { useState } from 'react';

import ItemCount from './ItemCount';

const Item = ({titulo, descripcion, stock, precio, imagen}) => {
    const [cantidad, setCantidad] = React.useState(0);

    const agregarAlCarrito = (_cantidad) => {
        const cantidadFinal = (parseInt(cantidad, 10) + parseInt(_cantidad, 10));
        if (stock >= cantidadFinal ) {
            setCantidad(cantidadFinal);
        }
    };

    return (

      <div className="card" >
        <img className="card-img-top" alt="" src={imagen}/>
        <div className="card-body">
          <h5 className="text-center card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">Precio: $ {precio}</p>
          <p className="card-text">En carrito: {cantidad}</p>
          <p className="text-right card-text"><a href="">Ver más</a></p>
          
          <ItemCount stock={stock} inicial="1" onAdd={(_cantidad) => agregarAlCarrito(_cantidad) } />
        </div>
      </div>

    );
}

export default Item;

