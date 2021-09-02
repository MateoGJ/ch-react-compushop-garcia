import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetailContainer from '../components/ItemDetailContainer';
import { getFirestore } from '../firebase';

function ItemPage({productos}) {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    getItem(id);
  }, [productos]);

  const _getItem = (itemId) => {
      setProducto(productos.find(item => item.id === itemId));
  };

  const getItem = (itemId) => {
      const db = getFirestore();
      const itemCollection = db.collection('items');
      const item = itemCollection.doc(itemId);

      item.get().then((doc) => {
          if(!doc.exists) {
              console.log('El producto no existe');
              return;
          }
          setProducto({ id: doc.id, ...doc.data()} );
      }).catch((error) => {
          console.log('Error', error);
      }).finally(() => {
    
      });
  };



  return (
      <>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">{(producto || {}).titulo}</h1>
          </div>

          <div className="container">
              <ItemDetailContainer producto={producto}/>
          </div>
      </>
  );
}

export default ItemPage;
