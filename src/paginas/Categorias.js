import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';

function Categorias ({productos, categorias}) {
    const { id } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

    const filtrarPorCategoria = (categoryId) => {
        const categoria =  categorias.filter(item => item.code === categoryId)[0];
        setCategoriaSeleccionada( categoria.label);
        const filtrados =  productos.filter(item => item.categoria === categoryId);
        setProductosFiltrados( filtrados || []);
    };

    useEffect(() => {
        return filtrarPorCategoria(id);
    }, [id, productos]);


    return (
        <>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">Categoría: {categoriaSeleccionada} </h1>
          </div>
          <div className="container">
              <ItemListContainer productos={productosFiltrados}/>
          </div>
        </>
    );
}

export default Categorias;

