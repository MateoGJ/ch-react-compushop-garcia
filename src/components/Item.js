import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart }  from '../contexts/CartContext';

import ItemDetailCantidadAgregada from './ItemDetailCantidadAgregada';

const Item = ({titulo, descripcion, stock, precio, imagen, id}) => {
    const cart = useCart();
    const [cantidad] = useState(0);

    return (
      <div className="col-md-4 mb-4 mh-75 pr-2 mt-3" style={{height: 500}}>
        <div className="card shadow-sm ">
            <img className="card-img-top" style={{height: 300}} alt="" src={`/images/${imagen}`}/>
            <div className="card-body">
              <h5 className="text-center card-title"  style={{minHeight: 75}}>{titulo}</h5>
              <p className="card-text text-strong">
                 Precio: <strong> $ {precio} </strong>
              </p>
                      
              <div className="card-text">
                 <ItemDetailCantidadAgregada cantidad={cart.items[id] ? cart.items[id].quantity : 0} precio={precio} /> 
              </div>
              <div className="row">
                  <div className="col align-self-center">
                      <p className="text-right card-text"><Link to={`/item/${id}`} className="btn btn-outline-primary">Ver más</Link></p>
                  </div>
              </div>
            </div>
        </div>
      </div>

    );
}

export default Item;

