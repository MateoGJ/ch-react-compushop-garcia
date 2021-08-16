import React, { useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
      const [producto, setProducto] = React.useState({});

      const cargarProducto = () => {
          const promesaCargaProducto = new Promise((resolve) => setTimeout(() => {
              resolve({
                  id: 4,
                  titulo: 'Producto A',
                  descripcion: 'La descripcion de la clase 7',
                  precio: 4000,
                  imagen: '',
                  stock: 10
              });
            }, 2000)
        );

        promesaCargaProducto.then(res => {
            setProducto(res);
        });

    }; 

    cargarProducto();

    return (
        <div className="card" style={{color: 'black'}}>
          <ItemDetail producto={producto}/> 
        </div>
    );
}

export default ItemDetailContainer;

