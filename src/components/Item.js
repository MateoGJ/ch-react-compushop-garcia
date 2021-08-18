import { useState } from 'react';
import { Link } from 'react-router-dom';

import ItemCount from './ItemCount';

const Item = ({titulo, descripcion, stock, precio, imagen, id}) => {
    const [cantidad, setCantidad] = useState(0);

    const agregarAlCarrito = (_cantidad) => {
        const cantidadFinal = (parseInt(cantidad, 10) + parseInt(_cantidad, 10));
        if (stock >= cantidadFinal ) {
            setCantidad(cantidadFinal);
        }
    };

    return (
      <div className="card col-md-4 mb-4 shadow-sm">
        <img className="card-img-top" alt="" src={`/images/${imagen}`}/>
        <div className="card-body">
          <h5 className="text-center card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">Precio: $ {precio}</p>
          <p className="card-text">En carrito: {cantidad}</p>
          <p className="text-right card-text"><Link to={`/item/${id}`} className="btn btn-outline-secondary">Ver más</Link></p>
          
          <ItemCount stock={stock} inicial="1" onAdd={(_cantidad) => agregarAlCarrito(_cantidad) } />
        </div>
      </div>

    );
}

export default Item;

