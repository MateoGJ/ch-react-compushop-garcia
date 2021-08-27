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

function Layout() {

  const [productos, setProductos] = useState([]);
  const [categories] = useState(categoriasData);

  const cargarProductos = () => {
      const promesaCargaProducto = new Promise((resolve) => setTimeout(() => {
          resolve(productosData);
      }, 2000)
    );

    promesaCargaProducto.then(res => {
        setProductos(res);
    });

  }

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <BrowserRouter>
        <CartProvider>
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
        </CartProvider>
    </BrowserRouter>
  );
}

export default Layout;
