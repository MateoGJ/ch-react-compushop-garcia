import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import { getFirestore } from '../firebase';

function Categorias ({productos, categorias}) {
    const { id } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

    const _filtrarPorCategoria = (categoryId) => {
        const categoria =  categorias.filter(item => item.code === categoryId)[0];
        setCategoriaSeleccionada( categoria.label);
        const filtrados =  productos.filter(item => item.categoria === categoryId);
        setProductosFiltrados( filtrados || []);
    };

    const filtrarPorCategoria = (categoryId) => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const categoriaCollection = itemCollection.where('categoria', '==', categoryId);
        categoriaCollection.get().then((querySnapshot) => {
            if(querySnapshot.size == 0) {
                console.log('Sin resultados');
            }
            setProductosFiltrados(querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            }));
        }).catch((error) => {
            console.log('Error', error);
        }).finally(() => {
      
        });
    }

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

