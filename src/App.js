import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './paginas/Home';
import Tienda from './paginas/Tienda';
import Categorias from './paginas/Categorias';
import ItemPage from './paginas/ItemPage';
import Carrito from './paginas/Carrito';

function App() {

  const [productos, setProductos] = useState([]);
  const [categories] = useState([
      {code: 'notebook', label: 'Notebooks'},
      {code: 'monitores', label: 'Monitores'},
      {code: 'impresoras', label: 'Impresoras'},
      {code: 'insumos', label: 'Insumos'}
  ]);

  const cargarProductos = () => {
      const promesaCargaProducto = new Promise((resolve) => setTimeout(() => {
          resolve([
              {
                  id: '1',
                  categoria: 'impresoras',
                  titulo: 'Impresora Laser HP 107A',
                  descripcion: 'Hasta 36 cuotas fijas con tarjetas seleccionadas',
                  precio: 16999,
                  imagen: 'impresora.webp_1000',
                  stock: 10
              },
              {
                  id: '2',
                  categoria: 'monitores',
                  titulo: 'MONITOR SAMSUNG LF27T350FH',
                  descripcion: 'Monitor LED de 27". Formato de pantalla Widescreen 16:9. Conexion HDMI. Brillo 250CD/M2. Resolucion 1920 x 1080. Radio de contraste 1000 a 1. Tiempo de respuesta 5 ms. Angulo de vision 178 (h) / 178 (v). Frecuencia vertical 60 Hz.',
                  precio:  34999,
                  imagen: 'monitores.jpeg',
                  stock: 3
              },
              {
                  id: '3',
                  categoria: 'notebook',
                  titulo: 'Notebook Acer A715-41G-E1KH AMD RyzenTM 5',
                  descripcion: 'Especificaciones de Notebook Acer A715-41G-E1KH AMD RyzenTM 5 PANTALLA 15.6"notebook (*) Las proporciones y medidas son aproximadas Tamaño de Pantalla15.6" Tipo de PantallaLED Resolución1920 x 1080 Pantalla TáctilNo',
                  precio: 179999,
                  imagen: 'notebook.webp_1000',
                  stock: 10
              },
              {
                  id: '4',
                  categoria: 'insumos',
                  titulo: 'Cartucho de tinta HP 664 negra Original (F6V29AL)',
                  descripcion: 'Rendimiento: 120 páginas (Promedio aproximado basado en ISO/IEC 24711. El rendimiento real varía considerablemente de acuerdo con el contenido de las páginas impresas y otros factores).',
                  precio: 1849,
                  imagen: 'cartucho.webp_1000',
                  stock: 10
              }
          ]);
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
  );
}

export default App;
