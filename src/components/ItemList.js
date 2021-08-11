import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        productos: []
    };

    this.cargarProductos();
  }

  cargarProductos() {
      const promesaCargaProducto = new Promise((resolve) => setTimeout(() => {
            resolve([
                {
                    id: 1,
                    titulo: 'Primer producto',
                    descripcion: 'Este es uno de los mejores productos del mercado',
                    precio: 1000,
                    imagen: '',
                    stock: 10
                },
                {
                    id: 2,
                    titulo: 'Segundo producto',
                    descripcion: 'Este es un mal producto y nos quedan pocos',
                    precio: 554,
                    imagen: '',
                    stock: 3
                },
                {
                    id: 3,
                    titulo: 'Playstation 4',
                    descripcion: 'Uno de los productos mejores vendidos',
                    precio: 120000,
                    imagen: '',
                    stock: 10
                }
            ]);
        }, 2000)
      );

      promesaCargaProducto.then(res => {
          console.log('Productos cargados');
          this.setState( {productos: res});
      });

  } 

  render() {
      return (
        <div className="container">
            <div className="row">
              {this.state.productos.map(item => <Item key={item.id} titulo={item.titulo} descripcion={item.descripcion} precio={item.precio} stock={item.stock} />)}
            </div>
        </div>
      );
  }
}

export default ItemList;
