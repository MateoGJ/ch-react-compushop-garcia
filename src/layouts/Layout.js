import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Home from '../paginas/Home';
import Tienda from '../paginas/Tienda';
import Categorias from '../paginas/Categorias';
import ItemPage from '../paginas/ItemPage';
import Carrito from '../paginas/Carrito';
import { CartProvider }  from '../contexts/CartContext';

import { productosData, categoriasData } from '../data/data';
import { getFirestore } from '../firebase';

function Layout() {

  const [productos, setProductos] = useState([]);
  const [categories] = useState(categoriasData);

  const _cargarProductos = () => {
      const promesaCargaProducto = new Promise((resolve) => setTimeout(() => {
          resolve(productosData);
      }, 2000)
    );

    promesaCargaProducto.then(res => {
        setProductos(res);
    });

  }

  const cargarProductos = () => {
      const db = getFirestore();
      const itemCollection = db.collection('items');
      itemCollection.get().then((querySnapshot) => {
          if(querySnapshot.size == 0) {
              console.log('Sin resultados');
          }
          setProductos(querySnapshot.docs.map(doc => {
              return { id: doc.id, ...doc.data()}
          }));
      }).catch((error) => {
          console.log('Error', error);
      }).finally(() => {
    
      });
  }

  useEffect(() => {
    cargarProductos();
  }, []);

  function sincronizar () {
      const db = getFirestore();
      Object.entries(productosData).forEach(([key, item]) => {
          db.collection("items").add({
              categoria: item.categoria,
              titulo: item.titulo,
              descripcion: item.descripcion,
              precio: item.precio,
              imagen: item.imagen,
              stock: item.stock
          })
          .then((docRef) => {
              console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
              console.error("Error adding document: ", error);
          });
      });
  }
  return (
    <CartProvider>
        <BrowserRouter>
            <NavBar categories={categories} />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home productos={productos} greeting="Acá encontrarás los mejores productos del mercado"/>
                    </Route>
                    <Route exact path="/tienda">
                        <Tienda productos={productos}/>
                    </Route>
                    <Route exact path="/category/:id">
                        <Categorias productos={productos} categorias={categories}/>
                    </Route>
                    <Route exact path="/item/:id">
                        <ItemPage productos={productos}/> 
                    </Route>
                    <Route exact path="/carrito">
                        <Carrito />
                    </Route>
                </Switch>
                <Footer categories={categories}/>
            </div>
        </BrowserRouter>
    </CartProvider>
  );
}

export default Layout;
