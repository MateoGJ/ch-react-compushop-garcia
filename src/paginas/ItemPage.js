import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetailContainer from '../components/ItemDetailContainer';

function ItemPage({productos}) {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    getItem(id);
  }, []);

  const getItem = (itemId) => {
      setProducto(productos.find(item => item.id === itemId));
  };

  return (
      <>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">{producto.titulo}</h1>
          </div>

          <div className="container">
              <ItemDetailContainer producto={producto}/>
          </div>
      </>
  );
}

export default ItemPage;
