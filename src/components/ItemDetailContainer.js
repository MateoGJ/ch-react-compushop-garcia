import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({producto}) => {
    return (
        <div className="card" style={{color: 'black'}}>
            <div className="container-fliud">
                {(() => {
                    if (producto) {
                        return (<ItemDetail producto={producto}/> );
                    }
                    return (
                        <div className="row mt-5 mb-5">
                            <div className="col text-center">
                                <h3>Cargando...</h3> 
                            </div>
                        </div>
                    );
                })()}
            </div>
        </div>
    );
}

export default ItemDetailContainer;

